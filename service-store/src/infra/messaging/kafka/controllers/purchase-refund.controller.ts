import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { PurchaseRefundUseCase } from '@/domain/application/use-cases/purchase-refund'

interface PurchaseRefundMessage {
  transactionId: string
}

@Controller()
export class PurchaseRefundController {
  constructor(private purchaseRefund: PurchaseRefundUseCase) {}

  @MessagePattern('purchase.refund')
  async handle(@Payload() message: PurchaseRefundMessage) {
    await this.purchaseRefund.execute({
      transactionId: message.transactionId,
    })
  }
}
