import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface SkinAttributes {
  championId: UniqueEntityID
  name: string
  releasedAt: Date
}

export class Skin extends Entity<SkinAttributes> {
  get championId() {
    return this.attributes.championId
  }

  get name() {
    return this.attributes.name
  }

  get releasedAt() {
    return this.attributes.releasedAt
  }

  static create(attributes: SkinAttributes, id?: UniqueEntityID) {
    const skin = new Skin(
      {
        ...attributes,
      },
      id,
    )

    return skin
  }
}
