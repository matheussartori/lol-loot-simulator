import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { PrismaChampionRepository } from './prisma/repositories/prisma-champion-repository'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { PrismaTransactionRepository } from './prisma/repositories/prisma-transaction-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: ChampionRepository,
      useClass: PrismaChampionRepository,
    },
    {
      provide: TransactionRepository,
      useClass: PrismaTransactionRepository,
    },
  ],
  exports: [PrismaService, ChampionRepository, TransactionRepository],
})
export class DatabaseModule {}
