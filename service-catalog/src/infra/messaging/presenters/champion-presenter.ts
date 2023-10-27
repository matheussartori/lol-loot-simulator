import { Champion } from '@/domain/enterprise/entities/champion'

export class ChampionPresenter {
  static toMessaging(champion: Champion) {
    return {
      id: champion.id.toString(),
      name: champion.name,
      releasedAt: champion.releasedAt,
    }
  }
}
