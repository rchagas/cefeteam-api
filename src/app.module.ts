import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ExercisesModule } from './exercises/exercises.module';
import { OnlineJudgeApiModule } from './online-judge-api/online-judge-api.module';
import { OnlineJudgeProfileModule } from './online-judge-profile/online-judge-profile.module';
import { UserExerciseModule } from './user-exercise/user-exercise.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PrismaModule,
    ExercisesModule,
    OnlineJudgeApiModule,
    OnlineJudgeProfileModule,
    UserExerciseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
