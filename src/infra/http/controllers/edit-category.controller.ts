import { BadGatewayException, Body, Controller, HttpCode, Param, Put } from '@nestjs/common';
import z from 'zod';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe';
import { EditCategoryUseCase } from '@/domain/application/use-cases/edit-category';

const editCategoryBodySchema = z.object({
  name: z.string(),
});

const bodyValidationPipe = new ZodValidationPipe(editCategoryBodySchema);

type EditCategoryBodySchema = z.infer<typeof editCategoryBodySchema>;

@Controller('/category/:id')
export class EditCategoryController {
  constructor(private editCategory: EditCategoryUseCase) {}

  @Put()
  @HttpCode(204)
  async handle(
    @Body(bodyValidationPipe) body: EditCategoryBodySchema,
    @Param('id') categoryId: string
  ) {
    const { name } = body;

    const result = await this.editCategory.execute({
      name,
      categoryId
    });

    if(result.isLeft()) {
      throw new BadGatewayException()
    }

  }
}
