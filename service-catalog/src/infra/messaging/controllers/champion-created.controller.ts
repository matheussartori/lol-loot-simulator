import { CreateChampionUseCase } from '@/domain/application/use-cases/create-champion'
import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'

interface ChampionCreatedMessage {
  name: string
  releasedAt: Date
}

@Controller()
export class ChampionCreatedController {
  constructor(private createChampion: CreateChampionUseCase) {}

  @MessagePattern('champion.created')
  async handle(@Payload() message: ChampionCreatedMessage) {
    await this.createChampion.execute({
      name: message.name,
      releasedAt: message.releasedAt,
    })
  }
}
