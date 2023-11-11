import { Champion } from '@/domain/enterprise/entities/champion'
import { ChampionWithImages } from '@/domain/enterprise/entities/value-objects/champion-with-images'

export abstract class ChampionRepository {
  abstract findByName(name: string): Promise<Champion | null>
  abstract findMany(): Promise<Champion[]>
  abstract findManyWithImages(): Promise<ChampionWithImages[]>
  abstract create(champion: Champion): Promise<void>
}
