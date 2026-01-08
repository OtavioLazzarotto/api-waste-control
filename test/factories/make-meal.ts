import { faker } from '@faker-js/faker';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Meal, MealProps, TurnsType } from '@/domain/enterprise/entities/meal';

export function makeMeal(
  override: Partial<MealProps> = {},
  id?: UniqueEntityID,
) {
  const meal = Meal.create(
    {
      date: faker.date.future({ years: 1 }),
      turn: TurnsType.AFTERNOON,
      userId: new UniqueEntityID(),
      ...override,
    },
    id,
  );

  return meal;
}
