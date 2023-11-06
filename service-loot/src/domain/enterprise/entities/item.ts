import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface ItemAttributes {
  itemId: UniqueEntityID
  name: string
  type: 'CHAMPION' | 'SKIN' | 'CHROMA'
  rarityTier:
    | 'STANDARD'
    | 'EPIC'
    | 'LEGENDARY'
    | 'MYTHIC'
    | 'ULTIMATE'
    | 'EXCLUSIVE'
  createdAt?: Date
  updatedAt?: Date
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