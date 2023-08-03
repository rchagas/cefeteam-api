import { Injectable } from '@nestjs/common';
import { Category, Exercise } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExercisesDto } from './dto/create-exercises.dto';
import { UpdateExercisesDto } from './dto/update-exercises.dto';

@Injectable()
export class ExercisesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateExercisesDto): Promise<Exercise> {
    return this.prisma.exercise.create({ data });
  }

  async findAll(): Promise<Exercise[]> {
    return this.prisma.exercise.findMany();
  }

  async findAllByCategory(category: Category): Promise<Exercise[]> {
    return this.prisma.exercise.findMany({ where: { category } });
  }

  async findAllByLevel(level: number): Promise<Exercise[]> {
    return this.prisma.exercise.findMany({ where: { level } });
  }

  async findOne(id: number): Promise<Exercise> {
    return this.prisma.exercise.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateExercisesDto): Promise<Exercise> {
    return this.prisma.exercise.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async remove(id: number) {
    return this.prisma.exercise.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async delete(id: number): Promise<Exercise> {
    return this.prisma.exercise.delete({ where: { id } });
  }
}
