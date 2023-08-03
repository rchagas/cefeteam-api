import { Module } from '@nestjs/common';
import { OnlineJudgeProfileService } from './online-judge-profile.service';
import { OnlineJudgeProfileController } from './online-judge-profile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OnlineJudgeProfileController],
  providers: [OnlineJudgeProfileService],
  imports: [PrismaModule],
})
export class OnlineJudgeProfileModule {}
