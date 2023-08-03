import { Injectable } from '@nestjs/common';
import { Prisma, User, UserType } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        userExercises: true,
      },
    });
  }

  async findByRole(userType: UserType): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { userType },
      include: {
        userExercises: true,
      }
    });
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { id },
      include: {
        userExercises: true,
      },
    });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async delete(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
