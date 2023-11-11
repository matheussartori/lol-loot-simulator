import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Champion } from '@/domain/enterprise/entities/champion'
import {
  Champion as PrismaChampion,
  ChampionImage as PrismaChampionImage,
} from '@prisma/client'
import { ChampionWithImages } from '@/domain/enterprise/entities/value-objects/champion-with-images'
import { ChampionImage } from '@/domain/enterprise/entities/champion-image'

type PrismaChampionWithImages = PrismaChampion & {
  images: PrismaChampionImage[]
}

export class PrismaChampionWithImagesMapper {
  static toDomain(raw: PrismaChampionWithImages): ChampionWithImages {
    const champion = Champion.create(
      {
        name: raw.name,
        rarityTier: raw.rarityTier,
        releasedAt: raw.releasedAt,
      },
      new UniqueEntityID(raw.id),
    )

    const images = raw.images.map((image) =>
      ChampionImage.create({
        championId: new UniqueEntityID(image.championId),
        url: image.url,
        createdAt: image.createdAt,
        type: image.type,
      }),
    )

    return ChampionWithImages.create({
      champion,
      images,
    })
  }
}
