import { Champion } from '@/domain/enterprise/entities/champion'

export class ChampionPresenter {
  static toHTTP(champion: Champion) {
    return {
      id: champion.id.toString(),
      championId: champion.championId.toString(),
      name: champion.name,
      blueEssencePrice: champion.blueEssencePrice,
      riotPointsPrice: champion.riotPointsPrice,
      releasedAt: champion.releasedAt,
    }
  }
}
