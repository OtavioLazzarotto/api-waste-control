import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Roles, User } from '@/domain/enterprise/entities/user';
import {
  Prisma,
  User as PrismaUser,
  RolesType,
} from '@/generated/prisma/client';

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser) {
    return User.create(
      {
        name: raw.name,
        username: raw.username,
        password: raw.password,
        roles: raw.roles as Roles,
        createdAt: raw.createdAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id.toString(),
      name: user.name,
      username: user.username,
      password: user.password,
      roles: user.roles as unknown as RolesType,
      createdAt: user.createdAt,
    };
  }
}
