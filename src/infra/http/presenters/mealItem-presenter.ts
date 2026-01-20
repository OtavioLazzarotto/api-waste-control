import { MealItem } from '@/domain/enterprise/entities/meal-item';

export class MealItemPresenter {
  static toHttp(mealItem: MealItem) {
    return {
      id: mealItem.id.toString(),
      mealId: mealItem.mealId.toString(),
      foodId: mealItem.foodId.toString(),
      quantityServed: mealItem.quantityServed,
      quantityConsumeds: mealItem.quantityConsumeds,
      createdAt: mealItem.createdAt,
      updatedAt: mealItem.updatedAt,
    };
  }
}
