import { Champion } from '@/domain/enterprise/entities/champion'

export abstract class ChampionRepository {
  abstract findMany(): Promise<Champion[]>
}
