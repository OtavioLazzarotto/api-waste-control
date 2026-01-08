import { Category } from '@/domain/enterprise/entities/category';
import { CategoriesRepository } from '../repositories/categories-repository';

interface CreateCategoryUseCaseRequest {
  name: string;
}

interface CreateCategoryUseCaseResponse {
  category: Category;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  async execute({
    name,
  }: CreateCategoryUseCaseRequest): Promise<CreateCategoryUseCaseResponse> {
    const category = Category.create({
      name,
    });

    await this.categoriesRepository.create(category);

    return {
      category,
    };
  }
}
