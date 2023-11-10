import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'

interface ChampionAddedMessage {
  champion: {
    id: string
    name: string
    releasedAt: Date
    images: {
      portrait: string
      splash: string
      loading: string
    }
  }
  blueEssencePrice: number
  riotPointsPrice: number
}

@Controller()
export class ChampionAddedController {
  constructor(private addChampion: AddChampionUseCase) {}

  @MessagePattern('champion.added')
  async handle(@Payload() message: ChampionAddedMessage) {
    await this.addChampion.execute({
      championId: message.champion.id,
      name: message.champion.name,
      releasedAt: message.champion.releasedAt,
      blueEssencePrice: message.blueEssencePrice,
      riotPointsPrice: message.riotPointsPrice,
      images: message.champion.images,
    })
  }
}
