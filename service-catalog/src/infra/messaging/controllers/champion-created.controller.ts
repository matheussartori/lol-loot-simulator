import { CreateChampionUseCase } from '@/domain/application/use-cases/create-champion'
import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { KafkaService } from '../kafka.service'
import { ChampionPresenter } from '../presenters/champion-presenter'

interface ChampionCreatedMessage {
  key: string
  value: {
    name: string
    blueEssencePrice: number
    riotPointsPrice: number
    releasedAt: Date
  }
}

@Controller()
export class ChampionCreatedController {
  constructor(
    private createChampion: CreateChampionUseCase,
    private kafka: KafkaService,
  ) {}

  @MessagePattern('champion.created')
  async handle(@Payload() message: ChampionCreatedMessage) {
    const result = await this.createChampion.execute({
      name: message.value.name,
      releasedAt: message.value.releasedAt,
    })

    if (result.isRight()) {
      this.kafka.emit('champion.added', {
        champion: ChampionPresenter.toMessaging(result.value.champion),
        blueEssencePrice: message.value.blueEssencePrice,
        riotPointsPrice: message.value.riotPointsPrice,
      })
    }
  }
}
