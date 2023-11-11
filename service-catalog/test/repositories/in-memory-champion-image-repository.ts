import { ChampionImageRepository } from '@/domain/application/repositories/champion-image-repository'
import { ChampionImage } from '@/domain/enterprise/entities/champion-image'

export class InMemoryChampionImageRepository
  implements ChampionImageRepository
{
  public items: ChampionImage[] = []

  async create(championImage: ChampionImage): Promise<void> {
    this.items.push(championImage)
  }
}
