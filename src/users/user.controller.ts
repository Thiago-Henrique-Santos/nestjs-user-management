import { Controller, Get, Post, Patch, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

import * as bcrypt from 'bcryptjs';
import { PatchUserDto } from './dto/patch-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {    
    if (!createUserDto.name || !createUserDto.email || !createUserDto.password) {
      throw new BadRequestException('Name, email, and password are required');
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(createUserDto.email)) {
      throw new BadRequestException('Invalid email format');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const newUser = await this.userService.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.userService.create(newUser);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  async updatePartial(@Param('id') id: number, @Body() updateUserDto: PatchUserDto): Promise<User> {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    // Validação manual de dados
    if (updateUserDto.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(updateUserDto.email)) {
      throw new BadRequestException('Invalid email format');
    }

    // Se a senha for fornecida, criptografa a senha
    if (updateUserDto.password) {
      const salt = await bcrypt.genSalt(10);
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, salt);
    }

    const updatedUser = await this.userService.updatePartial(id, updateUserDto);
    return updatedUser;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto): Promise<User> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    user.name = updateUserDto.name;
    user.email = updateUserDto.email;

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(updateUserDto.password, salt);

    await this.userService.update(id, user);

    return user;
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}