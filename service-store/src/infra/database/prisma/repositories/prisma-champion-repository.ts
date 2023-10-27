import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { Champion } from '@/domain/enterprise/entities/champion'
import { PrismaService } from '../prisma.service'
import { PrismaChampionMapper } from '../mappers/prisma-champion-mapper'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaChampionRepository implements ChampionRepository {
  constructor(private prisma: PrismaService) {}

  async findByChampionId(championId: string): Promise<Champion | null> {
    const champion = await this.prisma.champion.findUnique({
      where: {
        championId,
      },
    })

    if (!champion) {
      return null
    }

    return PrismaChampionMapper.toDomain(champion)
  }

  async create(champion: Champion): Promise<void> {
    const data = PrismaChampionMapper.toPrisma(champion)

    await this.prisma.champion.create({
      data,
    })
  }
}
