import { Champion } from '@/domain/enterprise/entities/champion'

export abstract class ChampionRepository {
  abstract findByChampionId(championId: string): Promise<Champion | null>
  abstract create(champion: Champion): Promise<void>
}
