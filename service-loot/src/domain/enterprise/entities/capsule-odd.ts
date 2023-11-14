import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'
import { RarityTier } from '@/domain/enterprise/entities/rarity'

export interface CapsuleOddAttributes {
  capsuleId: UniqueEntityID
  rarityTier: RarityTier
  odd: number
  createdAt: Date
  updatedAt: Date
}

export class CapsuleOdd extends Entity<CapsuleOddAttributes> {
  get capsuleId() {
    return this.attributes.capsuleId
  }

  get rarityTier() {
    return this.attributes.rarityTier
  }

  get odd() {
    return this.attributes.odd
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  get updatedAt() {
    return this.attributes.updatedAt
  }

  static create(
    attributes: Optional<CapsuleOddAttributes, 'createdAt' | 'updatedAt'>,
    id?: UniqueEntityID,
  ) {
    const capsuleOdd = new CapsuleOdd(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
        updatedAt: attributes.updatedAt ?? new Date(),
      },
      id,
    )

    return capsuleOdd
  }
}
