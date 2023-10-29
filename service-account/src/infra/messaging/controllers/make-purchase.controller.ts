import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { MakePurchaseUseCase } from '@/domain/application/use-cases/make-purchase'

interface MakePurchaseMessage {
  userId: string
  itemId: string
  type: 'CHAMPION' | 'SKIN' | 'CHROMA'
  currency: 'BLUE_ESSENCE' | 'RIOT_POINTS'
  amount: number
  transactionId: string
}

@Controller()
export class MakePurchaseController {
  constructor(private makePurchase: MakePurchaseUseCase) {}

  @MessagePattern('purchase.created')
  async handle(@Payload() message: MakePurchaseMessage) {
    await this.makePurchase.execute({
      userId: message.userId,
      amount: message.amount,
      currency: message.currency,
      itemId: message.itemId,
      type: message.type,
      transactionId: message.transactionId,
    })
  }
}
