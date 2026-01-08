import { makeCategory } from '../../../../test/factories/make-category';
import { InMemoryCategoriesRepository } from '../../../../test/repositories/in-memory-categories-repository';
import { CreateCategoryUseCase } from './create-category';

let inMemoryCategoriesRepository: InMemoryCategoriesRepository;
let sut: CreateCategoryUseCase;

describe('Create category', () => {
  beforeEach(() => {
    inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    sut = new CreateCategoryUseCase(inMemoryCategoriesRepository);
  });

  it('should be able to create an category', async () => {
    const newCategory = makeCategory();
    const { category } = await sut.execute(newCategory);

    expect(category.id).toBeTruthy();
    expect(inMemoryCategoriesRepository.items[0].id).toEqual(category.id);
  });
});
