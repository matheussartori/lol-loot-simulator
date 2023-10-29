import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { MakePurchaseUseCase } from '@/domain/application/use-cases/make-purchase'

interface MakePurchaseMessage {
  key: string
  value: {
    userId: string
    itemId: string
    type: 'CHAMPION' | 'SKIN' | 'CHROMA'
    currency: 'BLUE_ESSENCE' | 'RIOT_POINTS'
    amount: number
    transactionId: string
  }
}

@Controller()
export class MakePurchaseController {
  constructor(private makePurchase: MakePurchaseUseCase) {}

  @MessagePattern('purchase.created')
  async handle(@Payload() message: MakePurchaseMessage) {
    await this.makePurchase.execute({
      userId: message.value.userId,
      amount: message.value.amount,
      currency: message.value.currency,
      itemId: message.value.itemId,
      type: message.value.type,
      transactionId: message.value.transactionId,
    })
  }
}
