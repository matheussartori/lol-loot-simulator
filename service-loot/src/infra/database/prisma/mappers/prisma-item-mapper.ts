import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Item as PrismaItem } from '@prisma/client'
import { Item } from '@/domain/enterprise/entities/item'

export class PrismaItemMapper {
  static toDomain(raw: PrismaItem): Item {
    return Item.create(
      {
        itemId: new UniqueEntityID(raw.itemId),
        name: raw.name,
        type: raw.type,
        rarityTier: raw.rarityTier,
        createdAt: raw.createdAt ?? new Date(),
        updatedAt: raw.updatedAt ?? new Date(),
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(user: Item): PrismaItem {
    return {
      id: user.id.toString(),
      itemId: user.itemId.toString(),
      name: user.name,
      type: user.type,
      rarityTier: user.rarityTier,
      createdAt: user.createdAt ?? new Date(),
      updatedAt: user.updatedAt ?? new Date(),
    }
  }
}
