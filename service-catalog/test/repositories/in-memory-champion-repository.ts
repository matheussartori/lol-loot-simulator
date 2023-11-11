import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { Champion } from '@/domain/enterprise/entities/champion'
import { ChampionWithImages } from '@/domain/enterprise/entities/value-objects/champion-with-images'
import { InMemoryChampionImageRepository } from './in-memory-champion-image-repository'

export class InMemoryChampionRepository implements ChampionRepository {
  public items: Champion[] = []

  constructor(
    private championImageRepository: InMemoryChampionImageRepository,
  ) {}

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

  async findManyWithImages(): Promise<ChampionWithImages[]> {
    const championsWithImages = this.items.map((item) => {
      return {
        champion: item,
        championWithImages: this.championImageRepository.items.filter(
          (championImage) => championImage.championId === item.id,
        ),
      }
    })

    const result = championsWithImages.map((championWithImages) => {
      return ChampionWithImages.create({
        champion: championWithImages.champion,
        images: championWithImages.championWithImages,
      })
    })

    return result
  }

  async create(champion: Champion): Promise<void> {
    this.items.push(champion)
  }
}
