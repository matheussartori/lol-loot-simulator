import { Champion } from '@/domain/enterprise/entities/champion'

export class ChampionPresenter {
  static toHTTP(champion: Champion) {
    return {
      id: champion.id.toString(),
      name: champion.name,
      rarityTier: champion.rarityTier,
      releasedAt: champion.releasedAt,
    }
  }
}
