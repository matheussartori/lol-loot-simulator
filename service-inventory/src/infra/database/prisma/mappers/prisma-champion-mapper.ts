import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Champion } from '@/domain/enterprise/entities/champion'
import { Champion as PrismaChampion } from '@prisma/client'

export class PrismaChampionMapper {
  static toDomain(raw: PrismaChampion): Champion {
    return Champion.create(
      {
        championId: new UniqueEntityID(raw.championId),
        userId: new UniqueEntityID(raw.userId),
        releasedAt: raw.releasedAt,
        purchasedAt: raw.purchasedAt,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(champion: Champion): PrismaChampion {
    return {
      id: champion.id.toString(),
      championId: champion.championId.toString(),
      userId: champion.userId.toString(),
      releasedAt: champion.releasedAt,
      purchasedAt: champion.purchasedAt,
    }
  }
}
