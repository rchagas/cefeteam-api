import { ApiProperty } from '@nestjs/swagger';

export class CreateOnlineJudgeApiDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  baseApiUrl: string;
}
