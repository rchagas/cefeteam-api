import { ApiProperty } from '@nestjs/swagger';

export class CreateOnlineJudgeProfileDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  onlineJudgeApiId: number;
  @ApiProperty()
  profileId: number;
  @ApiProperty()
  username: string;
}
