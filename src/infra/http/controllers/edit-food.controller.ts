import z from 'zod';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe';
import { EditFoodUseCase } from '@/domain/application/use-cases/edit-food';
import { Controller, Body, Param, BadRequestException, Put, HttpCode } from '@nestjs/common';

const editFoodBodySchema = z.object({
  name: z.string().optional(),
  categoryId: z.uuid().optional(),
});

const bodyValidationPipe = new ZodValidationPipe(editFoodBodySchema);

type EditFoodbodySchema = z.infer<typeof editFoodBodySchema>;

@Controller('/food/:id')
export class EditFoodController {
  constructor(private foodFood: EditFoodUseCase) {}

  @Put()
  @HttpCode(204)
  async handle(@Body(bodyValidationPipe) body: EditFoodbodySchema,
  @Param('id') foodId: string
) {
    const { name, categoryId } = body;

    const result = await this.foodFood.execute({
      name,
      categoryId,
      foodId
    });

    if(result.isLeft()) {
      throw new BadRequestException()
    }
  }
}

