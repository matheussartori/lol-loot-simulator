import { CapsuleItemRepository } from '@/domain/application/repositories/capsule-item-repository'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { CapsuleItem } from '@/domain/enterprise/entities/capsule-item'
import { PrismaCapsuleItemMapper } from '@/infra/database/prisma/mappers/prisma-capsule-item-mapper'
import { Item } from '@/domain/enterprise/entities/item'
import { RarityTier } from '@/domain/enterprise/entities/rarity'
import { PrismaItemMapper } from '@/infra/database/prisma/mappers/prisma-item-mapper'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaCapsuleItemRepository implements CapsuleItemRepository {
  constructor(private prisma: PrismaService) {}

  async create(capsuleItem: CapsuleItem): Promise<void> {
    const data = PrismaCapsuleItemMapper.toPrisma(capsuleItem)

    await this.prisma.capsuleItem.create({
      data,
    })
  }

  async findRandomByCapsuleIdAndRarity(
    capsuleId: string,
    rarityTier: RarityTier,
  ): Promise<Item | null> {
    const capsule = await this.prisma.capsuleItem.findFirst({
      select: {
        item: true,
      },
      where: {
        capsuleId,
        item: {
          rarityTier,
        },
      },
    })

    if (!capsule) {
      return null
    }

    return PrismaItemMapper.toDomain(capsule.item)
  }
}
