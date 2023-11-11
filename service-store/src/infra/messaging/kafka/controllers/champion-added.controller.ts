import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'
import { RarityTier } from '@/domain/enterprise/entities/champion'

interface ChampionAddedMessage {
  champion: {
    id: string
    name: string
    releasedAt: Date
  }
  rarityTier: RarityTier
}

@Controller()
export class ChampionAddedController {
  constructor(private addChampion: AddChampionUseCase) {}

  @MessagePattern('champion.added')
  async handle(@Payload() message: ChampionAddedMessage) {
    await this.addChampion.execute({
      championId: message.champion.id,
      name: message.champion.name,
      releasedAt: message.champion.releasedAt,
      rarityTier: message.rarityTier,
    })
  }
}
