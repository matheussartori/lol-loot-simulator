import { ValidateOwnedChampionUseCase } from '@/domain/application/use-cases/validate-owned-champion'
import { ChampionRepository } from '@/domain/application/repositories/champion-repository'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { Injectable } from '@nestjs/common'

@Injectable()
export class NestValidateOwnedChampionUseCase extends ValidateOwnedChampionUseCase {
  constructor(
    championRepository: ChampionRepository,
    messageEmitter: MessageEmitter,
  ) {
    super(championRepository, messageEmitter)
  }
}
