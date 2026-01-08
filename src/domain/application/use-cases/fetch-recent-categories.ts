import { CategoriesRepository } from '../repositories/categories-repository';
import { Category } from '@/domain/enterprise/entities/category';

export interface FetchRecentCategoriesUseCaseRequest {
  page: number;
}

export interface FetchRecentCategoriesUseCaseResponse {
  categories: Category[];
}

export class FetchRecentCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  async execute({
    page,
  }: FetchRecentCategoriesUseCaseRequest): Promise<FetchRecentCategoriesUseCaseResponse> {
    const categories = await this.categoriesRepository.findManyRecent({ page });

    return {
      categories,
    };
  }
}
