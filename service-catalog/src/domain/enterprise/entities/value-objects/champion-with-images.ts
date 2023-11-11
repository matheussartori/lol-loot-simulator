import { Champion } from '@/domain/enterprise/entities/champion'
import { ChampionImage } from '@/domain/enterprise/entities/champion-image'
import { ValueObject } from '@/core/entities/value-object'

export interface ChampionWithImagesAttributes {
  champion: Champion
  images: ChampionImage[]
}

export class ChampionWithImages extends ValueObject<ChampionWithImagesAttributes> {
  get champion(): Champion {
    return this.attributes.champion
  }

  get images(): ChampionImage[] {
    return this.attributes.images
  }

  static create(attributes: ChampionWithImagesAttributes) {
    return new ChampionWithImages(attributes)
  }
}
