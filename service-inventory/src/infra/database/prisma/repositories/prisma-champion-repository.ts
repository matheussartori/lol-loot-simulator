import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { Champion } from '@/domain/enterprise/entities/champion'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaChampionMapper } from '../mappers/prisma-champion-mapper'

@Injectable()
export class PrismaChampionRepository implements ChampionRepository {
  constructor(private prisma: PrismaService) {}

  async findByUserIdAndChampionId(
    userId: string,
    championId: string,
  ): Promise<Champion | null> {
    const champion = await this.prisma.champion.findFirst({
      where: {
        userId,
        championId,
      },
    })

    if (!champion) {
      return null
    }

    return PrismaChampionMapper.toDomain(champion)
  }

  async findManyByUserId(userId: string): Promise<Champion[]> {
    const champion = await this.prisma.champion.findMany({
      where: {
        userId,
      },
    })

    return champion.map(PrismaChampionMapper.toDomain)
  }

  async create(champion: Champion): Promise<void> {
    const data = PrismaChampionMapper.toPrisma(champion)

    await this.prisma.champion.create({
      data,
    })
  }
}
