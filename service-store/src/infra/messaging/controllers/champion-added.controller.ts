import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'

interface ChampionAddedMessage {
  key: string
  value: {
    champion: {
      id: string
      name: string
      releasedAt: Date
    }
    blueEssencePrice: number
    riotPointsPrice: number
  }
}

@Controller()
export class ChampionAddedController {
  constructor(private addChampion: AddChampionUseCase) {}

  @MessagePattern('champion.added')
  async handle(@Payload() message: ChampionAddedMessage) {
    await this.addChampion.execute({
      championId: message.value.champion.id,
      name: message.value.champion.name,
      releasedAt: message.value.champion.releasedAt,
      blueEssencePrice: message.value.blueEssencePrice,
      riotPointsPrice: message.value.riotPointsPrice,
    })
  }
}
