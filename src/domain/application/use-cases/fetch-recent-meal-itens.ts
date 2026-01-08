import { MealItem } from "@/domain/enterprise/entities/meal-item";
import { MealItensRepository } from "../repositories/meal-item-repository";

export interface FetchRecentMealItensUseCaseRequest {
  page: number;
}

export interface FetchRecentMealItensUseCaseResponse {
  mealItens: MealItem[];
}

export class FetchRecentMealItensUseCase {
  constructor(private mealItensRepository: MealItensRepository) {}

  async execute({
    page,
  }: FetchRecentMealItensUseCaseRequest): Promise<FetchRecentMealItensUseCaseResponse> {
    const mealItens = await this.mealItensRepository.findManyRecent({ page });

    return {
      mealItens,
    };
  }
}
