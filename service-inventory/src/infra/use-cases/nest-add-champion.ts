import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { Injectable } from '@nestjs/common'
import { MessageEmitter } from '@/domain/messaging/message-emitter'

@Injectable()
export class NestAddChampionUseCase extends AddChampionUseCase {
  constructor(
    championRepository: ChampionRepository,
    messageEmitter: MessageEmitter,
  ) {
    super(championRepository, messageEmitter)
  }
}
