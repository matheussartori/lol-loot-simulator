import { CreateChampionUseCase } from '@/domain/application/use-cases/create-champion'
import { Controller } from '@nestjs/common'
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices'
import { CorrelationID } from '@/core/entities/correlation-id'

interface ChampionCreatedMessage {
  name: string
  blueEssencePrice: number
  riotPointsPrice: number
  releasedAt: Date
}

@Controller()
export class ChampionCreatedController {
  constructor(private createChampion: CreateChampionUseCase) {}

  @MessagePattern('champion.created')
  async handle(
    @Payload() message: ChampionCreatedMessage,
    @Ctx() context: KafkaContext,
  ) {
    const previousCorrelationId = context.getMessage().headers
      ?.correlationId as string

    const correlationId = new CorrelationID({
      name: CreateChampionUseCase.name,
      withPrevious: previousCorrelationId,
    })

    await this.createChampion.execute({
      name: message.name,
      blueEssencePrice: message.blueEssencePrice,
      riotPointsPrice: message.riotPointsPrice,
      releasedAt: message.releasedAt,
      correlationId,
    })
  }
}
