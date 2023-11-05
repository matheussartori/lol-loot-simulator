import { Optional } from '@/core/types/optional'
import { Entity } from 'src/core/entities/entity'
import { UniqueEntityID } from 'src/core/entities/unique-entity-id'

export interface CapsuleAttributes {
  name: string
  type:
    | 'CHEST'
    | 'RANDOM_SKIN'
    | 'RANDOM_SKIN_FRAGMENT'
    | 'RANDOM_CHAMPION'
    | 'RANDOM_CHAMPION_FRAGMENT'
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

  static create(
    attributes: Optional<CapsuleAttributes, 'createdAt' | 'updatedAt'>,
    id?: UniqueEntityID,
  ) {
    const capsule = new Capsule(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
        updatedAt: attributes.updatedAt ?? new Date(),
      },
      id,
    )

    return capsule
  }
}
