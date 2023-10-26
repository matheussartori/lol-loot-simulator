import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface ChampionAttributes {
  name: string
  releasedAt: Date
}

export class Champion extends Entity<ChampionAttributes> {
  get name() {
    return this.attributes.name
  }

  get releasedAt() {
    return this.attributes.releasedAt
  }

  static create(attributes: ChampionAttributes, id?: UniqueEntityID) {
    const champion = new Champion(
      {
        ...attributes,
      },
      id,
    )

    return champion
  }
}
