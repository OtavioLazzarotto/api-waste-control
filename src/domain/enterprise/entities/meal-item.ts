import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';

export interface MealItemProps {
  mealId: UniqueEntityID;
  foodId: UniqueEntityID;
  quantityServed: number;
  quantityConsumeds: number;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class MealItem extends Entity<MealItemProps> {
  get mealId() {
    return this.props.mealId;
  }

  set mealId(mealId: UniqueEntityID) {
    this.props.mealId = mealId
    this.touch()
  }

  get foodId() {
    return this.props.foodId;
  }

  set foodId(foodId: UniqueEntityID) {
    this.props.foodId = foodId
    this.touch()
  }

  get quantityServed() {
    return this.props.quantityServed;
  }

  set quantityServed(quantityServed: number) {
    this.props.quantityServed = quantityServed
    this.touch()
  }

  get quantityConsumeds() {
    return this.props.quantityConsumeds;
  }

  set quantityConsumeds(quantityConsumeds: number) {
    this.props.quantityConsumeds = quantityConsumeds
    this.touch()
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(
    props: Optional<MealItemProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const mealItem = new MealItem(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );
    return mealItem;
  }
}
