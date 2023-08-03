import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ examples: [UserType.CONTESTANT, UserType.COACH] })
  userType: UserType;
}
