import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export type RarityTier =
  | 'STANDARD'
  | 'EPIC'
  | 'LEGENDARY'
  | 'MYTHIC'
  | 'ULTIMATE'
  | 'EXCLUSIVE'

export interface ChampionAttributes {
  name: string
  rarityTier: RarityTier
  releasedAt: Date
}

export class Champion extends Entity<ChampionAttributes> {
  get name() {
    return this.attributes.name
  }

  get rarityTier() {
    return this.attributes.rarityTier
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
