import { Champion } from '@/domain/enterprise/entities/champion'

export class ChampionPresenter {
  static toHTTP(champion: Champion) {
    return {
      id: champion.id.toString(),
      releasedAt: champion.releasedAt,
      purchasedAt: champion.purchasedAt,
    }
  }
}
