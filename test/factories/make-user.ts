import { faker } from '@faker-js/faker'

import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Roles, User, UserProps } from "@/domain/enterprise/entities/user";

export function makeUser(override: Partial<UserProps> = {}, id?: UniqueEntityID) {
    const user = User.create({
        name: faker.person.firstName(),
        username: faker.person.fullName(),
        password: faker.lorem.slug(),
        roles: Roles.USER,
        ...override
    },
        id
    )
    return user
}