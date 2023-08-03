import { PartialType } from '@nestjs/swagger';
import { CreateOnlineJudgeProfileDto } from './create-online-judge-profile.dto';

export class UpdateOnlineJudgeProfileDto extends PartialType(CreateOnlineJudgeProfileDto) {}
