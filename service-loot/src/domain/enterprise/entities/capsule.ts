import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface CapsuleAttributes {
  name: string
  type: 'HEXTECH_CHEST' | 'CHAMPION_CAPSULE'
  requiresKey: boolean
  createdAt: Date
  updatedAt: Date
}

export class Capsule extends Entity<CapsuleAttributes> {
  get name() {
    return this.attributes.name
  }

  get type() {
    return this.attributes.type
  }

  get requiresKey() {
    return this.attributes.requiresKey
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  get updatedAt() {
    return this.attributes.updatedAt
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
