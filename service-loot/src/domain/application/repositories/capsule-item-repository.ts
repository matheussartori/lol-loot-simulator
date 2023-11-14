import { CapsuleItem } from '@/domain/enterprise/entities/capsule-item'
import { Item } from '@/domain/enterprise/entities/item'
import { RarityTier } from '@/domain/enterprise/entities/rarity'

export abstract class CapsuleItemRepository {
  abstract create(capsuleItem: CapsuleItem): Promise<void>
  abstract findRandomByCapsuleIdAndRarity(
    capsuleId: string,
    rarityTier: RarityTier,
  ): Promise<Item | null>
}
