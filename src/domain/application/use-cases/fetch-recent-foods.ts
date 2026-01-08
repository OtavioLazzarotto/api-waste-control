import { Food } from '@/domain/enterprise/entities/food';
import { FoodsRepository } from '../repositories/foods-repository';

export interface FetchRecentFoodsUseCaseRequest {
  page: number;
}

export interface FetchRecentFoodsUseCaseResponse {
  foods: Food[];
}

export class FetchRecentFoodsUseCase {
  constructor(private foodsRepository: FoodsRepository) {}

  async execute({
    page,
  }: FetchRecentFoodsUseCaseRequest): Promise<FetchRecentFoodsUseCaseResponse> {
    const foods = await this.foodsRepository.findManyRecent({ page });

    return {
      foods,
    };
  }
}
