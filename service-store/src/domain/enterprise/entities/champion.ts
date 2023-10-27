import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface ChampionAttributes {
  championId: UniqueEntityID
  name: string
  blueEssencePrice: number
  riotPointsPrice: number
  releasedAt: Date
}

export class Champion extends Entity<ChampionAttributes> {
  get championId() {
    return this.attributes.championId
  }

  get name() {
    return this.attributes.name
  }

  get blueEssencePrice() {
    return this.attributes.blueEssencePrice
  }

  get riotPointsPrice() {
    return this.attributes.riotPointsPrice
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
