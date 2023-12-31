import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { PrismaService } from '../prisma.service'
import { Champion } from '@/domain/enterprise/entities/champion'
import { PrismaChampionMapper } from '../mappers/prisma-champion-mapper'
import { Injectable } from '@nestjs/common'
import { ChampionWithImages } from '@/domain/enterprise/entities/value-objects/champion-with-images'
import { PrismaChampionWithImagesMapper } from '@/infra/database/prisma/mappers/prisma-champion-with-images-mapper'

@Injectable()
export class PrismaChampionRepository implements ChampionRepository {
  constructor(private prisma: PrismaService) {}

  async findByName(name: string): Promise<Champion | null> {
    const champion = await this.prisma.champion.findUnique({
      where: {
        name,
      },
    })

    if (!champion) {
      return null
    }

    return PrismaChampionMapper.toDomain(champion)
  }

  async findMany(): Promise<Champion[]> {
    const champions = await this.prisma.champion.findMany()

    return champions.map(PrismaChampionMapper.toDomain)
  }

  async findManyWithImages(): Promise<ChampionWithImages[]> {
    const championsWithImages = await this.prisma.champion.findMany({
      include: {
        images: true,
      },
    })

    return championsWithImages.map(PrismaChampionWithImagesMapper.toDomain)
  }

  async create(champion: Champion): Promise<void> {
    const data = PrismaChampionMapper.toPrisma(champion)

    await this.prisma.champion.create({
      data,
    })
  }
}
