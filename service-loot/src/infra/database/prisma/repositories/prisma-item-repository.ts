import { ItemRepository } from '@/domain/application/repositories/item-repository'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Item, ItemType } from '@/domain/enterprise/entities/item'
import { PrismaItemMapper } from '@/infra/database/prisma/mappers/prisma-item-mapper'
import { Injectable } from '@nestjs/common'
import { RarityTier } from '@/domain/enterprise/entities/rarity'

@Injectable()
export class PrismaItemRepository implements ItemRepository {
  constructor(private prisma: PrismaService) {}

  async create(item: Item): Promise<void> {
    const data = PrismaItemMapper.toPrisma(item)

    await this.prisma.item.create({
      data,
    })
  }

  async findById(itemId: string): Promise<Item | null> {
    const item = await this.prisma.item.findUnique({
      where: {
        itemId,
      },
    })

    if (!item) {
      return null
    }

    return PrismaItemMapper.toDomain(item)
  }

  async findRandomByTypeAndRarity(
    type: ItemType,
    rarityTier: RarityTier,
    maxQuantity: number,
  ): Promise<Item[]> {
    const items = await this.prisma.item.findMany({
      where: {
        type,
        rarityTier,
      },
      take: maxQuantity,
    })

    return items.map(PrismaItemMapper.toDomain)
  }
}
