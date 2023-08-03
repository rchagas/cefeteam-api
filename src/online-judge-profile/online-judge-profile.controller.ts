import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnlineJudgeProfileService } from './online-judge-profile.service';
import { CreateOnlineJudgeProfileDto } from './dto/create-online-judge-profile.dto';
import { UpdateOnlineJudgeProfileDto } from './dto/update-online-judge-profile.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Online Judge Profiles')
@Controller('online-judge-profile')
export class OnlineJudgeProfileController {
  constructor(
    private readonly onlineJudgeProfileService: OnlineJudgeProfileService,
  ) {}

  @Post()
  async create(
    @Body() createOnlineJudgeProfileDto: CreateOnlineJudgeProfileDto,
  ) {
    return this.onlineJudgeProfileService.create(createOnlineJudgeProfileDto);
  }

  @Get()
  async findAll() {
    return this.onlineJudgeProfileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.onlineJudgeProfileService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOnlineJudgeProfileDto: UpdateOnlineJudgeProfileDto,
  ) {
    return this.onlineJudgeProfileService.update(
      +id,
      updateOnlineJudgeProfileDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.onlineJudgeProfileService.delete(+id);
  }
}
