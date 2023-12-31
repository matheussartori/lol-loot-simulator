import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { Champion } from '@/domain/enterprise/entities/champion'

export class InMemoryChampionRepository implements ChampionRepository {
  public items: Champion[] = []

  async findByUserIdAndChampionId(
    userId: string,
    championId: string,
  ): Promise<Champion | null> {
    const champion = this.items.find(
      (item) =>
        item.championId.toString() === championId &&
        item.userId.toString() === userId,
    )

    if (!champion) {
      return null
    }

    return champion
  }

  async findManyByUserId(userId: string): Promise<Champion[]> {
    const champions = this.items.filter(
      (item) => item.userId.toString() === userId,
    )

    return champions
  }

  async create(champion: Champion): Promise<void> {
    this.items.push(champion)
  }
}
