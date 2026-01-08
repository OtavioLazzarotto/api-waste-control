import { Roles, User } from "@/domain/enterprise/entities/user";
import { UsersRepository } from "../repositories/users-repository";
import { Injectable } from "@nestjs/common";

interface CreateUserUseCaseRequest {
  name: string;
  username: string;
  password: string;
  roles: Roles;
}

interface CreateUserUseCaseResponse {
  user: User
}

@Injectable()
export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    username,
    password,
    roles
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {

    const user = User.create({
      name,
      username,
      password,
      roles
    });

    await this.usersRepository.create(user);

    return {
      user,
    };
  }
}
