import { Champion } from '@/domain/enterprise/entities/champion'

export abstract class ChampionRepository {
  abstract findByUserIdAndChampionId(
    userId: string,
    championId: string,
  ): Promise<Champion | null>

  abstract findManyByUserId(userId: string): Promise<Champion[]>
  abstract create(champion: Champion): Promise<void>
}
