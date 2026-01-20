import { Meal } from '@/domain/enterprise/entities/meal';

export class MealPresenter {
  static toHttp(meal: Meal) {
    return {
      id: meal.id.toString(),
      date: meal.date,
      turn: meal.turn,
      userId: meal.userId.toString(),
      createdAt: meal.createdAt,
      updatedAt: meal.updatedAt,
    };
  }
}
