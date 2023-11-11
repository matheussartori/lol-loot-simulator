import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Champion } from '@/domain/enterprise/entities/champion'
import { Champion as PrismaChampion } from '@prisma/client'

export class PrismaChampionMapper {
  static toDomain(raw: PrismaChampion): Champion {
    return Champion.create(
      {
        name: raw.name,
        rarityTier: raw.rarityTier,
        releasedAt: raw.releasedAt,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(champion: Champion): PrismaChampion {
    return {
      id: champion.id.toString(),
      name: champion.name,
      rarityTier: champion.rarityTier,
      releasedAt: champion.releasedAt,
    }
  }
}
