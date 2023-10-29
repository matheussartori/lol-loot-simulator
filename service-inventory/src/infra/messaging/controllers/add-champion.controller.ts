import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'

interface AddChampionMessage {
  key: string
  value: {
    userId: string
    itemId: string
    type: 'CHAMPION' | 'SKIN' | 'CHROMA'
    transactionId: string
  }
}

@Controller()
export class AddChampionController {
  constructor(private addChampion: AddChampionUseCase) {}

  @MessagePattern('inventory.item.added')
  async handle(@Payload() message: AddChampionMessage) {
    if (message.value.type !== 'CHAMPION') {
      return
    }

    await this.addChampion.execute({
      championId: message.value.itemId,
      purchasedAt: new Date(),
      releasedAt: new Date(),
      userId: message.value.userId,
    })
  }
}
