import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'

interface ChampionAddedMessage {
  champion: object
  blueEssencePrice: number
  riotPointsPrice: number
}

@Controller()
export class ChampionAddedController {
  constructor(private addChampion: AddChampionUseCase) {}

  @MessagePattern('champion.added')
  async handle(@Payload() message: ChampionAddedMessage) {
    console.log({ message })
  }
}
