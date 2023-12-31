import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface ChampionAttributes {
  championId: UniqueEntityID
  userId: UniqueEntityID
  releasedAt: Date
  purchasedAt: Date
}

export class Champion extends Entity<ChampionAttributes> {
  get championId() {
    return this.attributes.championId
  }

  get userId() {
    return this.attributes.userId
  }

  get releasedAt() {
    return this.attributes.releasedAt
  }

  get purchasedAt() {
    return this.attributes.purchasedAt
  }

  static create(attributes: ChampionAttributes, id?: UniqueEntityID) {
    const champion = new Champion(
      {
        ...attributes,
        purchasedAt: new Date(),
      },
      id,
    )

    return champion
  }
}
