import { Injectable } from '@nestjs/common';
import { OnlineJudgeProfile } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOnlineJudgeProfileDto } from './dto/create-online-judge-profile.dto';
import { UpdateOnlineJudgeProfileDto } from './dto/update-online-judge-profile.dto';

@Injectable()
export class OnlineJudgeProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOnlineJudgeProfileDto) {
    return this.prisma.onlineJudgeProfile.create({ data });
  }

  async findAll() {
    return this.prisma.onlineJudgeProfile.findMany();
  }

  async findOne(id: number) {
    return this.prisma.onlineJudgeProfile.findFirst({ where: { id } });
  }

  async update(
    id: number,
    data: UpdateOnlineJudgeProfileDto,
  ): Promise<OnlineJudgeProfile> {
    return this.prisma.onlineJudgeProfile.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async remove(id: number): Promise<OnlineJudgeProfile> {
    return this.prisma.onlineJudgeProfile.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async delete(id: number): Promise<OnlineJudgeProfile> {
    return this.prisma.onlineJudgeProfile.delete({ where: { id } });
  }
}
