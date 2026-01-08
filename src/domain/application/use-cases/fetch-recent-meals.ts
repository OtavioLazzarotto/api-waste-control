import { Meal } from "@/domain/enterprise/entities/meal";
import { MealsRepository } from "../repositories/meals-repository";

export interface FetchRecentMealsUseCaseRequest {
  page: number;
}

export interface FetchRecentMealsUseCaseResponse {
  meals: Meal[];
}

export class FetchRecentMealsUseCase {
  constructor(private mealsRepository: MealsRepository) {}

  async execute({
    page,
  }: FetchRecentMealsUseCaseRequest): Promise<FetchRecentMealsUseCaseResponse> {
    const meals = await this.mealsRepository.findManyRecent({ page });

    return {
      meals,
    };
  }
}
