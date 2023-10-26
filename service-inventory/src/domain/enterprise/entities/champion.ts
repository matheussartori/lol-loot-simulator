import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface ChampionAttributes {
  championId: UniqueEntityID
  userId: UniqueEntityID
  releasedAt: Date
  purchasedAt?: Date
}

export class Champion extends Entity<ChampionAttributes> {
  static create(attributes: ChampionAttributes, id?: UniqueEntityID) {
    const champion = new Champion(
      {
        purchasedAt: new Date(),
        ...attributes,
      },
      id,
    )

    return champion
  }
}
