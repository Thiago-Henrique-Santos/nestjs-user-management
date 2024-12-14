import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { PatchUserDto } from './dto/patch-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    console.log('Consultando por email:', email);
    return this.userRepository.findOne({ where: { email } });
  }

  async updatePartial(id: number, updateUserDto: PatchUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    if (updateUserDto.name) user.name = updateUserDto.name;
    if (updateUserDto.email) user.email = updateUserDto.email;
    if (updateUserDto.password) user.password = updateUserDto.password;

    return this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    await this.userRepository.update({ id }, updateUserDto);
    return this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    await this.userRepository.remove(user);
  }
}
