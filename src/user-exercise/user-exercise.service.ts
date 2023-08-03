import { Injectable } from '@nestjs/common';
import { UserExercise } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserExerciseDto } from './dto/create-user-exercise.dto';
import { UpdateUserExerciseDto } from './dto/update-user-exercise.dto';

@Injectable()
export class UserExerciseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserExerciseDto): Promise<UserExercise> {
    return this.prisma.userExercise.create({ data });
  }

  async findAll(): Promise<UserExercise[]> {
    return this.prisma.userExercise.findMany({
      include: {
        exercise: true,
      },
    });
  }

  async findOne(id: number): Promise<UserExercise> {
    return this.prisma.userExercise.findFirst({ where: { id } });
  }

  async findAllByUser(userId: number): Promise<UserExercise[]> {
    return this.prisma.userExercise.findMany({
      where: { userId },
      include: {
        exercise: true,
      },
    });
  }

  async update(id: number, data: UpdateUserExerciseDto): Promise<UserExercise> {
    return this.prisma.userExercise.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async remove(id: number): Promise<UserExercise> {
    return this.prisma.userExercise.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async delete(id: number): Promise<UserExercise> {
    return this.prisma.userExercise.delete({
      where: { id },
    });
  }
}
