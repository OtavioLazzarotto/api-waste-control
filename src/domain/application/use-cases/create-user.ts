import { Roles, User } from '@/domain/enterprise/entities/user';
import { UsersRepository } from '../repositories/users-repository';
import { Injectable } from '@nestjs/common';
import { Either, left, right } from '@/core/either';
import { HashGenerator } from '../cryptography/hash-generator';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';

interface CreateUserUseCaseRequest {
  name: string;
  username: string;
  password: string;
  roles: Roles;
}

type CreateUserUseCaseResponse = Either<
  UserAlreadyExistsError,
  {
    user: User;
  }
>;

@Injectable()
export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashGenerator: HashGenerator,
  ) {}

  async execute({
    name,
    username,
    password,
    roles,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const userWithSameUsername =
      await this.usersRepository.findByUsername(username);

    if (userWithSameUsername) {
      return left(new UserAlreadyExistsError(username));
    }

    const hashedPassword = await this.hashGenerator.hash(password);

    const user = User.create({
      name,
      username,
      password: hashedPassword,
      roles,
    });

    await this.usersRepository.create(user);

    return right({
      user,
    });
  }
}
