import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';

export enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface UserProps {
  name: string;
  username: string;
  password: string;
  roles: Roles;
  createdAt: Date;
}

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name;
  }

  get username() {
    return this.props.username;
  }

  get password() {
    return this.props.password;
  }

  get roles() {
    return this.props.roles;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  static create(props: Optional<UserProps, 'createdAt'>, id?: UniqueEntityID) {
    const user = new User(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );
    return user;
  }
}
