import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export type ChampionImageType = 'PORTRAIT' | 'SPLASH' | 'LOADING'

export interface ChampionImageAttributes {
  championId: UniqueEntityID
  type: ChampionImageType
  url: string
  createdAt: Date | null
}

export class ChampionImage extends Entity<ChampionImageAttributes> {
  get championId() {
    return this.attributes.championId
  }

  get type() {
    return this.attributes.type
  }

  get url() {
    return this.attributes.url
  }

  get createdAt() {
    return this.attributes.createdAt
  }

  static create(
    attributes: Optional<ChampionImageAttributes, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const championImage = new ChampionImage(
      {
        ...attributes,
        createdAt: attributes.createdAt ?? new Date(),
      },
      id,
    )

    return championImage
  }
}
