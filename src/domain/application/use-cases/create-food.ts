import { Food } from '@/domain/enterprise/entities/food';
import { FoodsRepository } from '../repositories/foods-repository';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Either, right } from '@/core/either';
import { Injectable } from '@nestjs/common';

interface CreateFoodUseCaseRequest {
  name: string;
  categoryId: string;
}

type CreateFoodUseCaseResponse = Either<
  null,
  {
    food: Food;
  }
>;

@Injectable()
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

    return right({
      food,
    });
  }
}
