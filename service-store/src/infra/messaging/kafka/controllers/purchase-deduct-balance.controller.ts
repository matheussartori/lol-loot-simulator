import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { PurchaseDeductBalanceUseCase } from '@/domain/application/use-cases/purchase-deduct-balance'

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
  async handle(@Payload() message: PurchaseDeductBalanceMessage) {
    switch (message.type) {
      case 'CHAMPION':
        await this.purchaseDeductBalance.execute({
          userId: message.userId,
          itemId: message.itemId,
          type: 'CHAMPION',
          transactionId: message.transactionId,
        })
        break
    }
  }
}
