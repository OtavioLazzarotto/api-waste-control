import { WastesRepository } from '@/domain/application/repositories/wastes-repository';
import { Waste } from '@/domain/enterprise/entities/waste';
import { PaginationParams } from '@/domain/enterprise/repositories/pagination-params';

export class InMemoryWastesRepository implements WastesRepository {
  public items: Waste[] = [];

  async findById(id: string) {
    const waste = this.items.find((waste) => waste.id.toString() === id);

    if (!waste) {
      return null;
    }

    return waste;
  }

  async findManyRecent({ page }: PaginationParams) {
    const wastes = this.items
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20);

    return wastes;
  }

  async create(waste: Waste) {
    this.items.push(waste);
  }

  async save(waste: Waste) {
    const itemIndex = this.items.findIndex((item) => item.id === waste.id);

    this.items[itemIndex] = waste;
  }

  async delete(waste: Waste) {
    const itemIndex = this.items.findIndex((item) => item.id === waste.id);

    this.items.splice(itemIndex, 1)
  }
}
