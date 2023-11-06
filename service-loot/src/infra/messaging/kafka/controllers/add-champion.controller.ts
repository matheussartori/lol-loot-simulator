import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'

interface AddChampionMessage {
  champion: {
    id: string
    name: string
    releasedAt: Date
  }
  blueEssencePrice: number
  riotPointsPrice: number
}

@Controller()
export class AddChampionController {
  constructor(private addChampion: AddChampionUseCase) {}

  @MessagePattern('champion.added')
  async handle(@Payload() message: AddChampionMessage) {
    await this.addChampion.execute({
      itemId: message.champion.id,
      name: message.champion.name,
    })
  }
}
