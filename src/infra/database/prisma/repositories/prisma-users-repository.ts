import { UsersRepository } from '@/domain/application/repositories/users-repository';
import { User } from '@/domain/enterprise/entities/user';

export class PrismaUsersRepository implements UsersRepository {
  findByUsername(username: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  create(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
