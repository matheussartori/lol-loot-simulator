import { ItemRepository } from '@/domain/application/repositories/item-repository'
import { Item, ItemType, RarityTier } from '@/domain/enterprise/entities/item'

export class InMemoryItemRepository implements ItemRepository {
  public items: Item[] = []

  async create(item: Item): Promise<void> {
    this.items.push(item)
  }

  async findById(itemId: string): Promise<Item | null> {
    const item = this.items.find((item) => item.id.toString() === itemId)

    if (!item) {
      return null
    }

    return item
  }

  async findRandomByTypeAndRarity(
    type: ItemType,
    rarityTier: RarityTier,
    maxQuantity: number,
  ): Promise<Item[]> {
    const items = this.items.filter(
      (item) => item.type === type && item.rarityTier === rarityTier,
    )

    if (items.length <= maxQuantity) {
      return items
    }

    const selectedItems: Item[] = []
    while (selectedItems.length < maxQuantity) {
      const randomIndex = Math.floor(Math.random() * items.length)
      const selectedItem = items[randomIndex]
      if (!selectedItems.includes(selectedItem)) {
        selectedItems.push(selectedItem)
      }
    }

    return selectedItems
  }
}
