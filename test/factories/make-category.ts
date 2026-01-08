import { faker } from '@faker-js/faker';

import { Category, CategoryProps } from '@/domain/enterprise/entities/category';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

export function makeCategory(
  override: Partial<CategoryProps> = {},
  id?: UniqueEntityID,
) {
  const category = Category.create(
    {
      name: faker.lorem.slug(),
      ...override,
    },
    id,
  );

  return category;
}
