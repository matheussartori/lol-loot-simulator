import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { PurchaseFailedOwnedUseCase } from '@/domain/application/use-cases/purchase-failed-owned'

interface PurchaseFailedOwnedMessage {
  transactionId: string
}

@Controller()
export class PurchaseFailedOwnedController {
  constructor(private purchaseFailedOwned: PurchaseFailedOwnedUseCase) {}

  @MessagePattern('purchase.failed.owned')
  async handle(@Payload() message: PurchaseFailedOwnedMessage) {
    await this.purchaseFailedOwned.execute({
      transactionId: message.transactionId,
    })
  }
}
