import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { MealItem } from '@/domain/enterprise/entities/meal-item';
import { Prisma, MealItem as PrismaMealItem } from '@/generated/prisma/client';

export class PrismaMealItemMapper {
  static toDomain(raw: PrismaMealItem) {
    return MealItem.create(
      {
        foodId: new UniqueEntityID(raw.foodId),
        mealId: new UniqueEntityID(raw.mealId),
        quantityConsumeds: raw.quantityConsumeds.toNumber(),
        quantityServed: raw.quantityServed.toNumber(),
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }

  static toPrisma(mealItem: MealItem): Prisma.MealItemUncheckedCreateInput {
    return {
      id: mealItem.id.toString(),
      foodId: mealItem.foodId.toString(),
      mealId: mealItem.mealId.toString(),
      quantityConsumeds: mealItem.quantityConsumeds,
      quantityServed: mealItem.quantityServed,
      createdAt: mealItem.createdAt,
      updatedAt: mealItem.updatedAt,
    };
  }
}
