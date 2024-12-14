import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;

  const mockUser = {
    id: 1,
    name: 'Gilbert Williams',
    email: 'will.gil@example.com',
    password: 'pass12345',
    created_at: new Date(),
    updated_at: new Date()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            findOne: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find a user by id', async () => {
    const mockUser = {
      id: 1,
      name: 'Gilbert Williams',
      email: 'will.gil@example.com',
      password: 'pass12345',
      created_at: new Date(),
      updated_at: new Date(),
    };
    repository.findOne = jest.fn().mockResolvedValue(mockUser);
    
    const user = await service.findOne(1);
    expect(user).toEqual(mockUser);
    expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
  });

  it('should save a user', async () => {
    const mockUser = {
      id: 1,
      name: 'Gilbert Williams',
      email: 'will.gil@example.com',
      password: 'pass12345',
      created_at: new Date(),
      updated_at: new Date(),
    };
    repository.save = jest.fn().mockResolvedValue(mockUser);
  
    const savedUser = await service.create(mockUser);
    expect(savedUser).toEqual(mockUser);
    expect(repository.save).toHaveBeenCalledWith(mockUser);
  });

  it('should update a user', async () => {
    const mockUser = {
      id: 1,
      name: 'Gilbert Williams',
      email: 'will.gil@example.com',
      password: 'pass12345',
      created_at: new Date(),
      updated_at: new Date(),
    };
  
    const userToUpdate = {
      name: 'Gilbert Williams',
      email: 'will.gil@example.com',
      password: 'pass12345',
    };
  
    repository.update = jest.fn().mockResolvedValue(undefined);
    repository.findOne = jest.fn().mockResolvedValue(mockUser);
  
    const updatedUser = await service.update(1, userToUpdate);
    expect(updatedUser).toEqual(mockUser);
  
    expect(repository.update).toHaveBeenCalledWith(
      { where: { id: 1 } },
      userToUpdate
    );
  
    expect(repository.findOne).toHaveBeenCalledTimes(2);
    expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
  });

  it('should remove a user', async () => {
    const mockUser = {
      id: 1,
      name: 'Gilbert Williams',
      email: 'will.gil@example.com',
      password: 'pass12345',
      created_at: new Date(),
      updated_at: new Date(),
    };
    repository.findOne = jest.fn().mockResolvedValue(mockUser);
    repository.remove = jest.fn();
  
    await service.remove(1);
    expect(repository.remove).toHaveBeenCalledWith(mockUser);
  });
  
});