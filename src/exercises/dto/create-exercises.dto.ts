import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

export class CreateExercisesDto {
  @ApiProperty()
  onlineJudgeApiId: number;

  @ApiProperty()
  exerciseApiId: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description?: string = 'Exercise description not found';

  @ApiProperty()
  level?: number;

  @ApiProperty({
    examples: [Category.BEGINNER, Category.ADHOC, Category.GRAPHS],
  })
  category: Category;

  @ApiProperty()
  succefull_attempts?: number;
}
