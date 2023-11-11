import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { PrismaChampionRepository } from './prisma/repositories/prisma-champion-repository'
import { TransactionRepository } from '@/domain/application/repositories/transaction-repository'
import { PrismaTransactionRepository } from './prisma/repositories/prisma-transaction-repository'
import { UserRepository } from '@/domain/application/repositories/user-repository'
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository'

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
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [
    PrismaService,
    ChampionRepository,
    TransactionRepository,
    UserRepository,
  ],
})
export class DatabaseModule {}
