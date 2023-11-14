import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface CapsuleItemAttributes {
  capsuleId: UniqueEntityID
  itemId: UniqueEntityID
  createdAt: Date
  updatedAt: Date
}

export class CapsuleItem extends Entity<CapsuleItemAttributes> {
  get capsuleId() {
    return this.attributes.capsuleId
  }

  get itemId() {
    return this.attributes.itemId
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  get updatedAt() {
    return this.attributes.updatedAt
  }

  static create(
    attributes: Optional<CapsuleItemAttributes, 'createdAt' | 'updatedAt'>,
    id?: UniqueEntityID,
  ) {
    const capsuleItem = new CapsuleItem(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
        updatedAt: attributes.updatedAt ?? new Date(),
      },
      id,
    )

    return capsuleItem
  }
}
