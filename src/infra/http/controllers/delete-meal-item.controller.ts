import { DeleteMealItemUseCase } from "@/domain/application/use-cases/delete-meal-item";
import { Controller, Delete, HttpCode, Param } from "@nestjs/common";


@Controller('/mealItem/:mealItemId')
export class DeleteMealItemController {
  constructor(private deleteMealItem: DeleteMealItemUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param('mealItemId') mealItemId: string) {
    await this.deleteMealItem.execute({ mealItemId });
  }
}
