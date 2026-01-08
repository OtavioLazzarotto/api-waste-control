import { CategoriesRepository } from '../repositories/categories-repository';

export interface EditCategoryUseCaseRequest {
  categoryId: string;
  name: string;
}

export interface EditCategoryUseCaseResponse {}

export class EditCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({
    categoryId,
    name,
  }: EditCategoryUseCaseRequest): Promise<EditCategoryUseCaseResponse> {
    const category = await this.categoriesRepository.findById(categoryId);

    if (!category) {
      throw new Error('Category not found');
    }

    category.name = name;

    await this.categoriesRepository.save(category);

    return {};
  }
}
