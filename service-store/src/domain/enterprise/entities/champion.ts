import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export type RarityTier =
  | 'STANDARD'
  | 'EPIC'
  | 'LEGENDARY'
  | 'MYTHIC'
  | 'ULTIMATE'
  | 'EXCLUSIVE'

export interface ChampionAttributes {
  championId: UniqueEntityID
  name: string
  rarityTier: RarityTier
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

  get rarityTier() {
    return this.attributes.rarityTier
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

  setPricesOnRarityTier(rarityTier: RarityTier) {
    switch (rarityTier) {
      case 'STANDARD':
        this.attributes.blueEssencePrice = 450
        this.attributes.riotPointsPrice = 260
        break
      case 'EPIC':
        this.attributes.blueEssencePrice = 1350
        this.attributes.riotPointsPrice = 585
        break
      case 'LEGENDARY':
        this.attributes.blueEssencePrice = 3150
        this.attributes.riotPointsPrice = 790
        break
      case 'MYTHIC':
        this.attributes.blueEssencePrice = 4800
        this.attributes.riotPointsPrice = 880
        break
      case 'ULTIMATE':
        this.attributes.blueEssencePrice = 6300
        this.attributes.riotPointsPrice = 975
        break
    }
  }

  static create(
    attributes: Optional<
      ChampionAttributes,
      'blueEssencePrice' | 'riotPointsPrice'
    >,
    id?: UniqueEntityID,
  ) {
    const champion = new Champion(
      {
        blueEssencePrice: 0,
        riotPointsPrice: 0,
        ...attributes,
      },
      id,
    )

    champion.setPricesOnRarityTier(champion.rarityTier)

    return champion
  }
}
