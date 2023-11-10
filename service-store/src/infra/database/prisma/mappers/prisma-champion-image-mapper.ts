import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ChampionImage as PrismaChampionImage } from '@prisma/client'
import { ChampionImage } from '@/domain/enterprise/entities/champion-image'

export class PrismaChampionImageMapper {
  static toDomain(raw: PrismaChampionImage): ChampionImage {
    return ChampionImage.create(
      {
        championId: new UniqueEntityID(raw.championId),
        type: raw.type,
        url: raw.url,
        createdAt: raw.createdAt ?? null,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(championImage: ChampionImage): PrismaChampionImage {
    return {
      id: championImage.id.toString(),
      championId: championImage.championId.toString(),
      type: championImage.type,
      url: championImage.url,
      createdAt: championImage.createdAt ?? null,
    }
  }
}
