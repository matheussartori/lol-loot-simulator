import { Champion } from '@/domain/enterprise/entities/champion'

export class ChampionPresenter {
  static toHTTP(champion: Champion) {
    return {
      id: champion.championId.toString(),
      releasedAt: champion.releasedAt,
      purchasedAt: champion.purchasedAt,
    }
  }
}
