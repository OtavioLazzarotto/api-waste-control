import { User } from "@/domain/enterprise/entities/user";

export abstract class UsersRepository {
    abstract findByUsername(username: string): Promise<User | null>
    abstract create(user: User): Promise<void>
}