import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'
import { RarityTier } from '@/domain/enterprise/entities/rarity'

export type ItemType = 'CHAMPION' | 'SKIN' | 'CHROMA'

export interface ItemAttributes {
  itemId: UniqueEntityID
  name: string
  type: ItemType
  rarityTier: RarityTier
  createdAt: Date
  updatedAt: Date
}

export class Item extends Entity<ItemAttributes> {
  get itemId() {
    return this.attributes.itemId
  }

  get name() {
    return this.attributes.name
  }

  get type() {
    return this.attributes.type
  }

  get rarityTier() {
    return this.attributes.rarityTier
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  get updatedAt() {
    return this.attributes.updatedAt
  }

  rollRarityTier() {
    const random = Math.random() * 100

    if (random <= 65) {
      return 'STANDARD'
    } else if (random <= 65 + 15) {
      return 'EPIC'
    } else if (random <= 65 + 15 + 7) {
      return 'LEGENDARY'
    } else if (random <= 65 + 15 + 7 + 12.966) {
      return 'ULTIMATE'
    } else if (random <= 65 + 15 + 7 + 12.966 + 0.004) {
      return 'EXCLUSIVE'
    } else {
      return 'MYTHIC'
    }
  }

  static create(
    attributes: Optional<ItemAttributes, 'createdAt' | 'updatedAt'>,
    id?: UniqueEntityID,
  ) {
    const item = new Item(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
        updatedAt: attributes.updatedAt ?? new Date(),
      },
      id,
    )

    return item
  }
}
