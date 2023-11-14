import { CapsuleItemRepository } from '@/domain/application/repositories/capsule-item-repository'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { CapsuleItem } from '@/domain/enterprise/entities/capsule-item'
import { PrismaCapsuleItemMapper } from '@/infra/database/prisma/mappers/prisma-capsule-item-mapper'
import { Item } from '@/domain/enterprise/entities/item'
import { RarityTier } from '@/domain/enterprise/entities/rarity'
import { PrismaItemMapper } from '@/infra/database/prisma/mappers/prisma-item-mapper'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

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
    const randomId = (await this.prisma
      .$queryRaw(Prisma.sql`SELECT capsule_items.item_id
      FROM capsule_items
       INNER JOIN items on items.item_id = capsule_items.item_id
      WHERE capsule_items.capsule_id = ${capsuleId} AND items.rarity_tier::text = ${rarityTier}
      ORDER BY random()
      LIMIT 1`)) as undefined | Array<{ item_id: string }>

    if (!randomId) {
      return null
    }

    if (!randomId[0].item_id) {
      return null
    }

    const itemId = randomId[0].item_id

    const capsule = await this.prisma.capsuleItem.findFirst({
      select: {
        item: true,
      },
      where: {
        itemId,
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
