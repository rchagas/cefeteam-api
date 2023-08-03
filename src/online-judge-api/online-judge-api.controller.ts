import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnlineJudgeApiService } from './online-judge-api.service';
import { CreateOnlineJudgeApiDto } from './dto/create-online-judge-api.dto';
import { UpdateOnlineJudgeApiDto } from './dto/update-online-judge-api.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OnlineJudgeApi } from '@prisma/client';

@ApiTags('Online Judge Apis')
@Controller('online-judge-api')
export class OnlineJudgeApiController {
  constructor(private readonly onlineJudgeApiService: OnlineJudgeApiService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new connection to external online judge api',
  })
  async create(
    @Body() createOnlineJudgeApiDto: CreateOnlineJudgeApiDto,
  ): Promise<OnlineJudgeApi> {
    return this.onlineJudgeApiService.create(createOnlineJudgeApiDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Return all connections to external online judge api ',
  })
  async findAll(): Promise<OnlineJudgeApi[]> {
    return this.onlineJudgeApiService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return an external api judge by id' })
  async findOne(@Param('id') id: string): Promise<OnlineJudgeApi | null> {
    return this.onlineJudgeApiService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an external connection api' })
  async update(
    @Param('id') id: string,
    @Body() updateOnlineJudgeApiDto: UpdateOnlineJudgeApiDto,
  ): Promise<OnlineJudgeApi> {
    return this.onlineJudgeApiService.update(+id, updateOnlineJudgeApiDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove an external connection api' })
  async remove(@Param('id') id: string): Promise<OnlineJudgeApi> {
    return this.onlineJudgeApiService.delete(+id);
  }
}
