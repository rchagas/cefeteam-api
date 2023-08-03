import { Module } from '@nestjs/common';
import { UserExerciseService } from './user-exercise.service';
import { UserExerciseController } from './user-exercise.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UserExerciseController],
  providers: [UserExerciseService],
  imports: [PrismaModule],
})
export class UserExerciseModule {}
