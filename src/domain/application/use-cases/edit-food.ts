import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { FoodsRepository } from '../repositories/foods-repository';

export interface EditFoodUseCaseRequest {
  foodId: string;
  name: string;
  categoryId: string;
}

export interface EditFoodUseCaseResponse {}

export class EditFoodUseCase {
  constructor(private foodsRepository: FoodsRepository) {}

  async execute({
    foodId,
    name,
    categoryId,
  }: EditFoodUseCaseRequest): Promise<EditFoodUseCaseResponse> {
    const food = await this.foodsRepository.findById(foodId);

    if (!food) {
      throw new Error('Food not found');
    }

    food.name = name;
    food.categoryId = new UniqueEntityID(categoryId);

    await this.foodsRepository.save(food);

    return {};
  }
}
