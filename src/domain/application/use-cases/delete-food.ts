import { FoodsRepository } from '../repositories/foods-repository';

export interface DeleteFoodUseCaseRequest {
  id: string;
}

export interface DeleteFoodUseCaseResponse {}

export class DeleteFoodUseCase {
  constructor(private foodsRepository: FoodsRepository) {}

  async execute({
    id,
  }: DeleteFoodUseCaseRequest): Promise<DeleteFoodUseCaseResponse> {
    const food = await this.foodsRepository.findById(id);

    if (!food) {
      throw new Error('Food not found');
    }

    await this.foodsRepository.delete(food);

    return {};
  }
}
