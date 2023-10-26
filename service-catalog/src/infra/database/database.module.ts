import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { PrismaChampionRepository } from './prisma/repositories/prisma-champion-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: ChampionRepository,
      useClass: PrismaChampionRepository,
    },
  ],
  exports: [PrismaService, ChampionRepository],
})
export class DatabaseModule {}
