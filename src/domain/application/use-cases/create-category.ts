import { Category } from '@/domain/enterprise/entities/category';
import { CategoriesRepository } from '../repositories/categories-repository';
import { Either, right } from '@/core/either';
import { Injectable } from '@nestjs/common';

interface CreateCategoryUseCaseRequest {
  name: string;
}

type CreateCategoryUseCaseResponse = Either<
  null,
  {
    category: Category;
  }
>;

@Injectable()
export class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  async execute({
    name,
  }: CreateCategoryUseCaseRequest): Promise<CreateCategoryUseCaseResponse> {
    const category = Category.create({
      name,
    });

    await this.categoriesRepository.create(category);

    return right({
      category,
    });
  }
}
