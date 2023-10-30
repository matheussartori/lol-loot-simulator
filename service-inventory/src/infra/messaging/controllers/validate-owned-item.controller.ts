import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'

interface ValidateOwnedItemMessage {
  userId: string
  itemId: string
  type: 'CHAMPION' | 'SKIN' | 'CHROMA'
  transactionId: string
}

@Controller()
export class ValidateOwnedItemController {
  constructor(private validateOwnedItem: ValidateOwnedItemUseCase) {}

  @MessagePattern('purchase.created')
  async handle(@Payload() message: ValidateOwnedItemMessage) {}
}
