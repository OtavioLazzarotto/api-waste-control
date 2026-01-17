import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Meal, TurnsType } from '@/domain/enterprise/entities/meal';
import {
  Prisma,
  Meal as PrismaMeal,
  TurnsType as PrismaTurnsType,
} from '@/generated/prisma/client';

export class PrismaMealMapper {
  static toDomain(raw: PrismaMeal) {
    return Meal.create(
      {
        date: raw.date,
        userId: new UniqueEntityID(raw.userId),
        turn: raw.turn as TurnsType,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static toPrisma(meal: Meal): Prisma.MealUncheckedCreateInput {
    return {
      id: meal.id.toString(),
      date: meal.date,
      userId: meal.userId.toString(),
      turn: meal.turn as unknown as PrismaTurnsType,
      createdAt: meal.createdAt,
      updatedAt: meal.updatedAt,
    };
  }
}
