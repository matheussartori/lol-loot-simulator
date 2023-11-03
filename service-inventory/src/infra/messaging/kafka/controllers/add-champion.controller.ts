import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'

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
  async handle(@Payload() message: AddChampionMessage) {
    if (message.type !== 'CHAMPION') {
      return
    }

    await this.addChampion.execute({
      championId: message.itemId,
      purchasedAt: new Date(),
      releasedAt: new Date(),
      userId: message.userId,
      transactionId: message.transactionId,
    })
  }
}
