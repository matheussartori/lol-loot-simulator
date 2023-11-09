import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { CreateChampionUseCase } from '@/domain/application/use-cases/create-champion'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { Injectable } from '@nestjs/common'
import { ChampionImageRepository } from '@/domain/application/repositories/champion-image-repository'

@Injectable()
export class NestCreateChampionUseCase extends CreateChampionUseCase {
  constructor(
    championRepository: ChampionRepository,
    championImageRepository: ChampionImageRepository,
    messageEmitter: MessageEmitter,
  ) {
    super(championRepository, championImageRepository, messageEmitter)
  }
}
