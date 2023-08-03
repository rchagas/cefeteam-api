import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserExerciseService } from './user-exercise.service';
import { CreateUserExerciseDto } from './dto/create-user-exercise.dto';
import { UpdateUserExerciseDto } from './dto/update-user-exercise.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserExercise } from '@prisma/client';

@ApiTags('User Exercise')
@Controller('user-exercise')
export class UserExerciseController {
  constructor(private readonly userExerciseService: UserExerciseService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new UserExercise' })
  async create(
    @Body() createUserExerciseDto: CreateUserExerciseDto,
  ): Promise<UserExercise> {
    return this.userExerciseService.create(createUserExerciseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Return all userExercises' })
  async findAll(): Promise<UserExercise[]> {
    return this.userExerciseService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return an userExercise by id' })
  async findOne(@Param('id') id: string): Promise<UserExercise> {
    return this.userExerciseService.findOne(+id);
  }

  @Get('exercisesByUser/:userId')
  @ApiOperation({ summary: 'Return all userExercise by userId' })
  async findAllByUser(
    @Param('userId') userId: string,
  ): Promise<UserExercise[]> {
    return this.userExerciseService.findAllByUser(+userId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an UserExercise' })
  async update(
    @Param('id') id: string,
    @Body() updateUserExerciseDto: UpdateUserExerciseDto,
  ): Promise<UserExercise> {
    return this.userExerciseService.update(+id, updateUserExerciseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove an UserExercise' })
  async remove(@Param('id') id: string): Promise<UserExercise> {
    return this.userExerciseService.delete(+id);
  }
}
