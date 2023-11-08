import { ValidateOwnedChampionUseCase } from '@/domain/application/use-cases/validate-owned-champion'
import { Controller } from '@nestjs/common'
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices'
import { CorrelationID } from '@/core/entities/correlation-id'

interface ValidateOwnedItemMessage {
  userId: string
  itemId: string
  type: 'CHAMPION' | 'SKIN' | 'CHROMA'
  transactionId: string
}

@Controller()
export class ValidateOwnedItemController {
  constructor(private validateOwnedChampion: ValidateOwnedChampionUseCase) {}

  @MessagePattern('purchase.created')
  async handle(
    @Payload() message: ValidateOwnedItemMessage,
    @Ctx() context: KafkaContext,
  ) {
    const previousCorrelationId = context.getMessage().headers
      ?.correlationId as string

    const correlationId = new CorrelationID({
      name: ValidateOwnedChampionUseCase.name,
      withPrevious: previousCorrelationId,
    })

    switch (message.type) {
      case 'CHAMPION':
        await this.validateOwnedChampion.execute({
          userId: message.userId,
          championId: message.itemId,
          transactionId: message.transactionId,
          correlationId,
        })
        break
    }
  }
}
