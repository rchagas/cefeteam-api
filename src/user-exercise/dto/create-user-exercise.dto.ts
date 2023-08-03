import { ApiProperty } from '@nestjs/swagger';
import { Language } from '@prisma/client';

export class CreateUserExerciseDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  exerciseId: number;

  @ApiProperty()
  time: Date;

  @ApiProperty({
    examples: [
      Language.CPLUSPLUS,
      Language.CSHARP,
      Language.C99,
      Language.JAVA,
    ],
  })
  language: Language;

  @ApiProperty()
  submissionAt: Date;
}
