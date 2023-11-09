import { ChampionImageRepository } from '@/domain/application/repositories/champion-image-repository'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { PrismaChampionImageMapper } from '@/infra/database/prisma/mappers/prisma-champion-image-mapper'
import { ChampionImage } from '@/domain/enterprise/entities/champion-image'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaChampionImageRepository implements ChampionImageRepository {
  constructor(private prisma: PrismaService) {}

  async create(championImage: ChampionImage): Promise<void> {
    const data = PrismaChampionImageMapper.toPrisma(championImage)

    await this.prisma.championImage.create({
      data,
    })
  }
}
