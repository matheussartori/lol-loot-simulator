import { ItemRepository } from '@/domain/application/repositories/item-repository'
import { Item } from '@/domain/enterprise/entities/item'

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
}
