import { Food } from '@/domain/enterprise/entities/food';
import { FoodsRepository } from '../repositories/foods-repository';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

interface CreateFoodUseCaseRequest {
  name: string;
  categoryId: string;
}

interface CreateFoodUseCaseResponse {
  food: Food
}

export class CreateFoodUseCase {
  constructor(private foodsRepository: FoodsRepository) {}

  async execute({
    name,
    categoryId,
  }: CreateFoodUseCaseRequest): Promise<CreateFoodUseCaseResponse> {
    const food = Food.create({
      name,
      categoryId: new UniqueEntityID(categoryId),
    });

    await this.foodsRepository.create(food);

    return {
      food,
    };
  }
}
