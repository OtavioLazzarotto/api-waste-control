import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { makeCategory } from '../../../../test/factories/make-category';
import { InMemoryCategoriesRepository } from '../../../../test/repositories/in-memory-categories-repository';
import { EditCategoryUseCase } from './edit-category';

let inMemoryCategoriesRepository: InMemoryCategoriesRepository;
let sut: EditCategoryUseCase;

describe('Edit Category', () => {
  beforeEach(() => {
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    sut = new EditCategoryUseCase(inMemoryCategoriesRepository);
  });

  it('should be able to edit a food', async () => {
    const newCategory = makeCategory(
      { name: 'frango' },
      new UniqueEntityID('category-1'),
    );

    await inMemoryCategoriesRepository.create(newCategory);

    await sut.execute({
      categoryId: newCategory.id.toString(),
      name: 'frango Sadia',
    });

    expect(inMemoryCategoriesRepository.items[0]).toMatchObject({
      name: 'frango Sadia',
    });
  });
});
