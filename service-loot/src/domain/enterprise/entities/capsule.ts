import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'
import { CapsuleOdd } from '@/domain/enterprise/entities/capsule-odd'

export interface CapsuleAttributes {
  name: string
  slug: string
  requiresKey: boolean
  minItemsPrize: number
  maxItemsPrize: number
  createdAt: Date
  updatedAt: Date
}

export class Capsule extends Entity<CapsuleAttributes> {
  get name() {
    return this.attributes.name
  }

  get slug() {
    return this.attributes.slug
  }

  get requiresKey() {
    return this.attributes.requiresKey
  }

  get minItemsPrize() {
    return this.attributes.minItemsPrize
  }

  get maxItemsPrize() {
    return this.attributes.maxItemsPrize
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  get updatedAt() {
    return this.attributes.updatedAt
  }

  rollRewardedItemsQuantity() {
    const rewardedItemsQuantity =
      Math.floor(
        Math.random() *
          (this.attributes.maxItemsPrize - this.attributes.minItemsPrize + 1),
      ) + this.attributes.minItemsPrize

    return rewardedItemsQuantity
  }

  rollRarity(capsuleOdds: CapsuleOdd[]) {
    const totalOdd = capsuleOdds.reduce((acc, odd) => acc + odd.odd, 0)

    const random = Math.random() * totalOdd

    let cumulativeOdd = 0

    for (const capsuleOdd of capsuleOdds) {
      cumulativeOdd += capsuleOdd.odd

      if (random < cumulativeOdd) {
        return capsuleOdd.rarityTier
      }
    }

    return 'STANDARD'
  }

  static create(
    attributes: Optional<
      CapsuleAttributes,
      'createdAt' | 'updatedAt' | 'requiresKey'
    >,
    id?: UniqueEntityID,
  ) {
    const capsule = new Capsule(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
        updatedAt: attributes.updatedAt ?? new Date(),
        requiresKey: attributes.requiresKey ?? false,
      },
      id,
    )

    return capsule
  }
}
