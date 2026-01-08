import { CategoriesRepository } from '../repositories/categories-repository';

export interface DeleteCategoryUseCaseRequest {
  id: string;
}

export interface DeleteCategoryUseCaseResponse {}

export class DeleteCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({
    id,
  }: DeleteCategoryUseCaseRequest): Promise<DeleteCategoryUseCaseResponse> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new Error('Category not found');
    }

    await this.categoriesRepository.delete(category);

    return {};
  }
}
