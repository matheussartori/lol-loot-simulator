import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { PurchaseCompletedUseCase } from '@/domain/application/use-cases/purchase-completed'

interface PurchaseCompletedMessage {
  transactionId: string
}

@Controller()
export class PurchaseCompletedController {
  constructor(private purchaseCompleted: PurchaseCompletedUseCase) {}

  @MessagePattern('purchase.completed')
  async handle(@Payload() message: PurchaseCompletedMessage) {
    await this.purchaseCompleted.execute({
      transactionId: message.transactionId,
    })
  }
}
