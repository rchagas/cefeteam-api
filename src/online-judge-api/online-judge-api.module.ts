import { Module } from '@nestjs/common';
import { OnlineJudgeApiService } from './online-judge-api.service';
import { OnlineJudgeApiController } from './online-judge-api.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OnlineJudgeApiController],
  providers: [OnlineJudgeApiService],
  imports: [PrismaModule],
})
export class OnlineJudgeApiModule {}
