import { CapsuleItemRepository } from '@/domain/application/repositories/capsule-item-repository'
import { CapsuleItem } from '@/domain/enterprise/entities/capsule-item'
import { Item, RarityTier } from '@/domain/enterprise/entities/item'
import { InMemoryCapsuleRepository } from './in-memory-capsule-repository'
import { InMemoryItemRepository } from './in-memory-item-repository'

export class InMemoryCapsuleItemRepository implements CapsuleItemRepository {
  public items: CapsuleItem[] = []

  constructor(
    private capsuleRepository: InMemoryCapsuleRepository,
    private itemRepository: InMemoryItemRepository,
  ) {}

  async create(capsuleItem: CapsuleItem): Promise<void> {
    this.items.push(capsuleItem)
  }

  async findRandomByCapsuleIdAndRarity(
    capsuleId: string,
    rarityTier: RarityTier,
  ): Promise<Item> {
    const itemsOnTheCapsule = this.items
      .filter((item) => item.capsuleId.toString() === capsuleId)
      .map((item) => item.itemId.toString())

    const items = this.itemRepository.items.filter(
      (item) =>
        item.rarityTier === rarityTier &&
        itemsOnTheCapsule.includes(item.itemId.toString()),
    )

    const item = Math.floor(Math.random() * items.length)

    return items[item]
  }
}
