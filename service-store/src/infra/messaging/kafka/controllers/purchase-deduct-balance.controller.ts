import { Controller } from '@nestjs/common'
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices'
import { PurchaseDeductBalanceUseCase } from '@/domain/application/use-cases/purchase-deduct-balance'
import { CorrelationID } from '@/core/entities/correlation-id'

interface PurchaseDeductBalanceMessage {
  userId: string
  itemId: string
  type: 'CHAMPION' | 'SKIN' | 'CHROMA'
  transactionId: string
}

@Controller()
export class PurchaseDeductBalanceController {
  constructor(private purchaseDeductBalance: PurchaseDeductBalanceUseCase) {}

  @MessagePattern('purchase.validated.inventory')
  async handle(
    @Payload() message: PurchaseDeductBalanceMessage,
    @Ctx() context: KafkaContext,
  ) {
    const previousCorrelationId = context.getMessage().headers
      ?.correlationId as string

    const correlationId = new CorrelationID({
      name: PurchaseDeductBalanceUseCase.name,
      withPrevious: previousCorrelationId,
    })

    switch (message.type) {
      case 'CHAMPION':
        await this.purchaseDeductBalance.execute({
          userId: message.userId,
          itemId: message.itemId,
          type: 'CHAMPION',
          transactionId: message.transactionId,
          correlationId,
        })
        break
    }
  }
}
