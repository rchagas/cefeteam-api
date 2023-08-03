import { PartialType } from '@nestjs/swagger';
import { CreateOnlineJudgeApiDto } from './create-online-judge-api.dto';

export class UpdateOnlineJudgeApiDto extends PartialType(
  CreateOnlineJudgeApiDto,
) {}
