import { ChampionImage } from '@/domain/enterprise/entities/champion-image'

export abstract class ChampionImageRepository {
  abstract create(championImage: ChampionImage): Promise<void>
}
