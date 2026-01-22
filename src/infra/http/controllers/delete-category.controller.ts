import { DeleteCategoryUseCase } from '@/domain/application/use-cases/delete-category';
import { Controller, Delete, HttpCode, Param } from '@nestjs/common';

@Controller('/category/:categoryId')
export class DeleteCategoryController {
  constructor(private deleteCategory: DeleteCategoryUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param('categoryId') categoryId: string) {
    await this.deleteCategory.execute({ categoryId });
  }
}
