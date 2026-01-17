import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Food } from '@/domain/enterprise/entities/food';
import { Prisma, Food as PrismaFood } from '@/generated/prisma/client';

export class PrismaFoodMapper {
  static toDomain(raw: PrismaFood) {
    return Food.create(
      {
        name: raw.name,
        categoryId: new UniqueEntityID(raw.categoryId),
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
  
  static toPrisma(food: Food): Prisma.FoodUncheckedCreateInput {
    return {
      id: food.id.toString(),
      categoryId: food.categoryId.toString(),
      name: food.name,
      createdAt: food.createdAt,
      updatedAt: food.createdAt,
    };
  }
}
