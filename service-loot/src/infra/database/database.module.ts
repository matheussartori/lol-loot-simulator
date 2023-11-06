import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { UserRepository } from '@/domain/application/repositories/user-repository'
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository'
import { ItemRepository } from '@/domain/application/repositories/item-repository'
import { PrismaItemRepository } from '@/infra/database/prisma/repositories/prisma-item-repository'

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: ItemRepository,
      useClass: PrismaItemRepository,
    },
  ],
  exports: [PrismaService, UserRepository, ItemRepository],
})
export class DatabaseModule {}
