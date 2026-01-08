import { faker } from '@faker-js/faker';

import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import {
  ReasonType,
  Waste,
  WasteProps,
} from '@/domain/enterprise/entities/waste';

export function makeWaste(
  override: Partial<WasteProps> = {},
  id?: UniqueEntityID,
) {
  const waste = Waste.create(
    {
      mealItemId: new UniqueEntityID(),
      quantity: faker.number.int({ min: 1, max: 100 }),
      reason: ReasonType.LEFTOVER,
      ...override,
    },
    id,
  );

  return waste;
}
