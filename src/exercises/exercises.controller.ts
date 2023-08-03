import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExercisesDto } from './dto/create-exercises.dto';
import { UpdateExercisesDto } from './dto/update-exercises.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Category, Exercise } from '@prisma/client';

@ApiTags('Exercise')
@Controller('exercise')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Exercise' })
  async create(
    @Body() createExercisesDto: CreateExercisesDto,
  ): Promise<Exercise> {
    return this.exercisesService.create(createExercisesDto);
  }

  @Get()
  @ApiOperation({ summary: 'Return all Exercises' })
  async findAll(): Promise<Exercise[]> {
    return this.exercisesService.findAll();
  }

  @Get('category')
  @ApiOperation({ summary: 'Return all exercises by category' })
  @ApiQuery({ name: 'category', enum: Category })
  async filterByType(
    @Query('category') category: Category,
  ): Promise<Exercise[]> {
    return this.exercisesService.findAllByCategory(category);
  }

  @Get('level/:level')
  @ApiOperation({ summary: 'Return all userExercise by userId' })
  async findAllByUser(@Param('level') level: string): Promise<Exercise[]> {
    return this.exercisesService.findAllByLevel(+level);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return an Exercise by id' })
  async findOne(@Param('id') id: string): Promise<Exercise> {
    return this.exercisesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an Exercise' })
  async update(
    @Param('id') id: string,
    @Body() updateExercisesDto: UpdateExercisesDto,
  ): Promise<Exercise> {
    return this.exercisesService.update(+id, updateExercisesDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove an Exercise' })
  async remove(@Param('id') id: string): Promise<Exercise> {
    return this.exercisesService.delete(+id);
  }
}
