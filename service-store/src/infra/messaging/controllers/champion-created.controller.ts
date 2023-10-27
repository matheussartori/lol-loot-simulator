import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'

interface ChampionCreatedMessage {
  name: string
  releasedAt: Date
}

@Controller()
export class ChampionCreatedController {
  constructor(private addChampion: AddChampionUseCase) {}

  @MessagePattern('champion.created')
  async handle(@Payload() message: ChampionCreatedMessage) {
    await this.addChampion.execute({
      name: message.name,
      releasedAt: message.releasedAt,
    })
  }
}
