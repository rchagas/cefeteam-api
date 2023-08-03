import { Injectable } from '@nestjs/common';
import { OnlineJudgeApi } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOnlineJudgeApiDto } from './dto/create-online-judge-api.dto';
import { UpdateOnlineJudgeApiDto } from './dto/update-online-judge-api.dto';

@Injectable()
export class OnlineJudgeApiService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOnlineJudgeApiDto): Promise<OnlineJudgeApi> {
    return this.prisma.onlineJudgeApi.create({ data });
  }

  async findAll(): Promise<OnlineJudgeApi[]> {
    return this.prisma.onlineJudgeApi.findMany();
  }

  async findOne(id: number): Promise<OnlineJudgeApi | null> {
    return this.prisma.onlineJudgeApi.findUnique({ where: { id } });
  }

  async update(
    id: number,
    data: UpdateOnlineJudgeApiDto,
  ): Promise<OnlineJudgeApi> {
    return this.prisma.onlineJudgeApi.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async remove(id: number): Promise<OnlineJudgeApi> {
    return this.prisma.onlineJudgeApi.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async delete(id: number): Promise<OnlineJudgeApi> {
    return this.prisma.onlineJudgeApi.delete({ where: { id } });
  }
}
