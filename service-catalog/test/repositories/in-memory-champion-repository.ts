import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { Champion } from '@/domain/enterprise/entities/champion'

export class InMemoryChampionRepository implements ChampionRepository {
  public items: Champion[] = []

  async findMany(): Promise<Champion[]> {
    return this.items
  }
}
