import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';


export interface FoodProps {
  name: string;
  categoryId: UniqueEntityID;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Food extends Entity<FoodProps> {
  get name() {
    return this.props.name;
  }

  get categoryId() {
    return this.props.categoryId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  set name(name: string) {
    this.props.name = name;
    this.touch();
  }

  set categoryId(categoryId: UniqueEntityID) {
    this.props.categoryId = categoryId;
    this.touch();
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(props: Optional<FoodProps, 'createdAt'>, id?: UniqueEntityID) {
    const food = new Food(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return food;
  }
}
