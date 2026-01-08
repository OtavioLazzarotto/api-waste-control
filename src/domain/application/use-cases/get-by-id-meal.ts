import { Meal } from '@/domain/enterprise/entities/meal';
import { MealsRepository } from '../repositories/meals-repository';

export interface GetMealByIdUseCaseRequest {
  mealId: string;
}

export interface GetMealByIdUseCaseResponse {
  meal: Meal;
}

export class GetMealByIdUseCase {
  constructor(private mealsRepository: MealsRepository) {}

  async execute({
    mealId,
  }: GetMealByIdUseCaseRequest): Promise<GetMealByIdUseCaseResponse> {
    const meal = await this.mealsRepository.findById(mealId);

    if (!meal) {
      throw new Error('Meal not found');
    }

    return {
      meal,
    };
  }
}
