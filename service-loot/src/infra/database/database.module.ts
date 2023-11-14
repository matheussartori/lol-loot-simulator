import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { UserRepository } from '@/domain/application/repositories/user-repository'
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository'
import { ItemRepository } from '@/domain/application/repositories/item-repository'
import { PrismaItemRepository } from '@/infra/database/prisma/repositories/prisma-item-repository'
import { UserCapsuleRepository } from '@/domain/application/repositories/user-capsule-repository'
import { PrismaUserCapsuleRepository } from './prisma/repositories/prisma-user-capsule-repository'
import { CapsuleRepository } from '@/domain/application/repositories/capsule-repository'
import { PrismaCapsuleRepository } from './prisma/repositories/prisma-capsule-repository'
import { UserItemRepository } from '@/domain/application/repositories/user-item-repository'
import { PrismaUserItemRepository } from './prisma/repositories/prisma-user-item-repository'
import { CapsuleItemRepository } from '@/domain/application/repositories/capsule-item-repository'
import { PrismaCapsuleItemRepository } from '@/infra/database/prisma/repositories/prisma-capsule-item-repository'
import { CapsuleOddRepository } from '@/domain/application/repositories/capsule-odd-repository'
import { PrismaCapsuleOddRepository } from '@/infra/database/prisma/repositories/prisma-capsule-odd-repository'

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
    {
      provide: UserCapsuleRepository,
      useClass: PrismaUserCapsuleRepository,
    },
    {
      provide: CapsuleRepository,
      useClass: PrismaCapsuleRepository,
    },
    {
      provide: UserItemRepository,
      useClass: PrismaUserItemRepository,
    },
    {
      provide: CapsuleItemRepository,
      useClass: PrismaCapsuleItemRepository,
    },
    {
      provide: CapsuleOddRepository,
      useClass: PrismaCapsuleOddRepository,
    },
  ],
  exports: [
    PrismaService,
    UserRepository,
    ItemRepository,
    UserCapsuleRepository,
    CapsuleRepository,
    UserItemRepository,
    CapsuleItemRepository,
    CapsuleOddRepository,
  ],
})
export class DatabaseModule {}
