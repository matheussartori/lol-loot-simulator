import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'

interface ValidatePurchaseBalanceMessage {
  champion: {
    id: string
    name: string
    releasedAt: Date
  }
  blueEssencePrice: number
  riotPointsPrice: number
}

@Controller()
export class ValidatePurchaseBalanceController {
  constructor(private addChampion: AddChampionUseCase) {}

  @MessagePattern('champion.added')
  async handle(@Payload() message: ValidatePurchaseBalanceMessage) {
    await this.addChampion.execute({
      championId: message.champion.id,
      name: message.champion.name,
      releasedAt: message.champion.releasedAt,
      blueEssencePrice: message.blueEssencePrice,
      riotPointsPrice: message.riotPointsPrice,
    })
  }
}
