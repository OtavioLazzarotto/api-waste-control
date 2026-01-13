import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { FoodsRepository } from '../repositories/foods-repository';
import { Either, left, right } from '@/core/either';
import { ResourceNotFoundError } from '@/core/erros/errors/resource-not-found-error';
import { Injectable } from '@nestjs/common';

interface EditFoodUseCaseRequest {
  foodId: string;
  name: string;
  categoryId: string;
}

type EditFoodUseCaseResponse = Either<ResourceNotFoundError, {}>;

@Injectable()
export class EditFoodUseCase {
  constructor(private foodsRepository: FoodsRepository) {}

  async execute({
    foodId,
    name,
    categoryId,
  }: EditFoodUseCaseRequest): Promise<EditFoodUseCaseResponse> {
    const food = await this.foodsRepository.findById(foodId);

    if (!food) {
      return left(new ResourceNotFoundError());
    }

    food.name = name;
    food.categoryId = new UniqueEntityID(categoryId);

    await this.foodsRepository.save(food);

    return right({});
  }
}
