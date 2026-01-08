import { MealItensRepository } from "../repositories/meal-item-repository";


export interface DeleteMealItemUseCaseRequest {
  mealItemId: string;
}

export interface DeleteMealItemUseCaseResponse {}

export class DeleteMealItemUseCase {
  constructor(private mealItensRepository: MealItensRepository) {}

  async execute({
    mealItemId,
  }: DeleteMealItemUseCaseRequest): Promise<DeleteMealItemUseCaseResponse> {
    const mealItem = await this.mealItensRepository.findById(mealItemId);

    if (!mealItem) {
      throw new Error('Meal not found');
    }

    await this.mealItensRepository.delete(mealItem);

    return {};
  }
}
