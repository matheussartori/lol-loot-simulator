import { CreateChampionUseCase } from '@/domain/application/use-cases/create-champion'
import { Controller } from '@nestjs/common'
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices'
import { CorrelationID } from '@/core/entities/correlation-id'
import { RarityTier } from '@/domain/enterprise/entities/champion'

interface ChampionCreatedMessage {
  name: string
  rarityTier: RarityTier
  releasedAt: Date
  images: {
    portrait: string
    splash: string
    loading: string
  }
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
      rarityTier: message.rarityTier,
      releasedAt: message.releasedAt,
      correlationId,
      images: message.images,
    })
  }
}
