import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface SkinAttributes {
  userId: UniqueEntityID
  championId: UniqueEntityID
  releasedAt: Date
  purchasedAt?: Date
}

export class Skin extends Entity<SkinAttributes> {
  static create(attributes: SkinAttributes, id?: UniqueEntityID) {
    const skin = new Skin(
      {
        purchasedAt: new Date(),
        ...attributes,
      },
      id,
    )

    return skin
  }
}
