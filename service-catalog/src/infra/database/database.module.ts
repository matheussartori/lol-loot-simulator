import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { PrismaChampionRepository } from './prisma/repositories/prisma-champion-repository'
import { ChampionImageRepository } from '@/domain/application/repositories/champion-image-repository'
import { PrismaChampionImageRepository } from '@/infra/database/prisma/repositories/prisma-champion-image-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: ChampionRepository,
      useClass: PrismaChampionRepository,
    },
    {
      provide: ChampionImageRepository,
      useClass: PrismaChampionImageRepository,
    },
  ],
  exports: [PrismaService, ChampionRepository, ChampionImageRepository],
})
export class DatabaseModule {}
