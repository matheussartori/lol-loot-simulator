import { Controller } from '@nestjs/common'
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { CorrelationID } from '@/core/entities/correlation-id'

interface AddChampionMessage {
  userId: string
  itemId: string
  type: 'CHAMPION' | 'SKIN' | 'CHROMA'
  transactionId: string
}

@Controller()
export class AddChampionController {
  constructor(private addChampion: AddChampionUseCase) {}

  @MessagePattern('purchase.validated.balance')
  async handle(
    @Payload() message: AddChampionMessage,
    @Ctx() context: KafkaContext,
  ) {
    const previousCorrelationId = context.getMessage().headers
      ?.correlationId as string

    const correlationId = new CorrelationID({
      name: AddChampionUseCase.name,
      withPrevious: previousCorrelationId,
    })

    switch (message.type) {
      case 'CHAMPION':
        await this.addChampion.execute({
          championId: message.itemId,
          purchasedAt: new Date(),
          releasedAt: new Date(),
          userId: message.userId,
          transactionId: message.transactionId,
          correlationId,
        })
        break
    }
  }
}
