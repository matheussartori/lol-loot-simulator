import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

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
