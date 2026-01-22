import { DeleteFoodUseCase } from "@/domain/application/use-cases/delete-food";
import { Controller, Delete, HttpCode, Param } from "@nestjs/common";


@Controller('/food/:foodId')
export class DeleteFoodController {
  constructor(private deleteFood: DeleteFoodUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param('foodId') foodId: string) {
    await this.deleteFood.execute({ foodId });
  }
}
