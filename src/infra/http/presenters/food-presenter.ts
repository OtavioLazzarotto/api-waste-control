import { Food } from '@/domain/enterprise/entities/food';

export class FoodPresenter {
  static toHttp(food: Food) {
    return {
      id: food.id.toString(),
      name: food.name,
      categoryId: food.categoryId.toString(),
      createdAt: food.createdAt,
      updatedAt: food.updatedAt,
    };
  }
}
