import { Item, ItemType, RarityTier } from '@/domain/enterprise/entities/item'

export abstract class ItemRepository {
  abstract findById(itemId: string): Promise<Item | null>
  abstract findRandomByTypeAndRarity(
    type: ItemType,
    rarityTier: RarityTier,
    maxQuantity: number,
  ): Promise<Item[]>

  abstract create(item: Item): Promise<void>
}
