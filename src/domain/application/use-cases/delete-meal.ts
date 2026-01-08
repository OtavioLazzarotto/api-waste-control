import { MealsRepository } from "../repositories/meals-repository";

export interface DeleteMealUseCaseRequest {
  mealId: string;
}

export interface DeleteMealUseCaseResponse {}

export class DeleteMealUseCase {
  constructor(private mealsRepository: MealsRepository) {}

  async execute({
    mealId,
  }: DeleteMealUseCaseRequest): Promise<DeleteMealUseCaseResponse> {
    const meal = await this.mealsRepository.findById(mealId);

    if (!meal) {
      throw new Error('Meal not found');
    }

    await this.mealsRepository.delete(meal);

    return {};
  }
}
