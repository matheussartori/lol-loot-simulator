import { ValidateOwnedChampionUseCase } from '@/domain/application/use-cases/validate-owned-champion'
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
  constructor(private validateOwnedChampion: ValidateOwnedChampionUseCase) {}

  @MessagePattern('purchase.created')
  async handle(@Payload() message: ValidateOwnedItemMessage) {
    switch (message.type) {
      case 'CHAMPION':
        await this.validateOwnedChampion.execute({
          userId: message.userId,
          championId: message.itemId,
          transactionId: message.transactionId,
        })
        break
    }
  }
}
