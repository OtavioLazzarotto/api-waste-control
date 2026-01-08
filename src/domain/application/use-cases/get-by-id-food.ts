import { Food } from '@/domain/enterprise/entities/food';
import { FoodsRepository } from '../repositories/foods-repository';

export interface GetFoodByIdUseCaseRequest {
  id: string;
}

export interface GetFoodByIdUseCaseResponse {
  food: Food;
}

export class GetFoodByIdUseCase {
  constructor(private foodsRepository: FoodsRepository) {}

  async execute({
    id,
  }: GetFoodByIdUseCaseRequest): Promise<GetFoodByIdUseCaseResponse> {
    const food = await this.foodsRepository.findById(id);

    if (!food) {
      throw new Error('Food not found');
    }

    return {
      food,
    };
  }
}
