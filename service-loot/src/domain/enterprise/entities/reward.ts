import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface RewardAttributes {
  capsuleId: UniqueEntityID
  itemId: UniqueEntityID
  rarityTier:
    | 'STANDARD'
    | 'EPIC'
    | 'LEGENDARY'
    | 'MYTHIC'
    | 'ULTIMATE'
    | 'EXCLUSIVE'
  createdAt: Date
  updatedAt: Date
}

export class Reward extends Entity<RewardAttributes> {
  get capsuleId() {
    return this.attributes.capsuleId
  }

  get itemId() {
    return this.attributes.itemId
  }

  get rarityTier() {
    return this.attributes.rarityTier
  }

  static create(
    attributes: Optional<RewardAttributes, 'createdAt' | 'updatedAt'>,
    id?: UniqueEntityID,
  ) {
    const reward = new Reward(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
        updatedAt: attributes.updatedAt ?? new Date(),
      },
      id,
    )

    return reward
  }
}
