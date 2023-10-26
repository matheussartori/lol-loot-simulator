import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { Champion } from '@/domain/enterprise/entities/champion'

export class InMemoryChampionRepository implements ChampionRepository {
  public items: Champion[] = []

  async findByName(name: string): Promise<Champion | null> {
    const champion = this.items.find((champion) => champion.name === name)

    if (!champion) {
      return null
    }

    return champion
  }

  async findMany(): Promise<Champion[]> {
    return this.items
  }

  async create(champion: Champion): Promise<void> {
    this.items.push(champion)
  }
}
