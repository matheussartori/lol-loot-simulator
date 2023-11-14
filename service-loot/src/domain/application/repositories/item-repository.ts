import { Item } from '@/domain/enterprise/entities/item'

export abstract class ItemRepository {
  abstract findById(itemId: string): Promise<Item | null>
  abstract create(item: Item): Promise<void>
}
