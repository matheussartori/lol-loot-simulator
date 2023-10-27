import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Champion } from '@/domain/enterprise/entities/champion'
import { Champion as PrismaChampion } from '@prisma/client'

export class PrismaChampionMapper {
  static toDomain(raw: PrismaChampion): Champion {
    return Champion.create(
      {
        championId: new UniqueEntityID(raw.championId),
        name: raw.name,
        blueEssencePrice: raw.blueEssencePrice,
        riotPointsPrice: raw.riotPointsPrice,
        releasedAt: raw.releasedAt,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(champion: Champion): PrismaChampion {
    return {
      id: champion.id.toString(),
      championId: champion.championId.toString(),
      name: champion.name,
      blueEssencePrice: champion.blueEssencePrice,
      riotPointsPrice: champion.riotPointsPrice,
      releasedAt: champion.releasedAt,
    }
  }
}
