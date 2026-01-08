import { MealItem } from '@/domain/enterprise/entities/meal-item';
import { MealItensRepository } from '../repositories/meal-item-repository';

export interface GetMealItemByIdUseCaseRequest {
  mealItemId: string;
}

export interface GetMealItemByIdUseCaseResponse {
  mealItem: MealItem;
}

export class GetMealItemByIdUseCase {
  constructor(private mealItensRepository: MealItensRepository) {}

  async execute({
    mealItemId,
  }: GetMealItemByIdUseCaseRequest): Promise<GetMealItemByIdUseCaseResponse> {
    const mealItem = await this.mealItensRepository.findById(mealItemId);

    if (!mealItem) {
      throw new Error('Meal Item not found');
    }

    return {
      mealItem,
    };
  }
}
