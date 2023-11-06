import { Item, RarityTier } from '@/domain/enterprise/entities/item'
import { ItemType } from '@prisma/client'

export abstract class ItemRepository {
  abstract findById(itemId: string): Promise<Item | null>
  abstract findRandomByTypeAndRarity(
    type: ItemType,
    rarityTier: RarityTier,
    maxQuantity: number,
  ): Promise<Item[]>

  abstract create(item: Item): Promise<void>
}
