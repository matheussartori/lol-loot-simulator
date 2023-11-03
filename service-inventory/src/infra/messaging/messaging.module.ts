import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { DatabaseModule } from '../database/database.module'
import { KafkaService } from './kafka/kafka.service'
import { AddChampionController } from '@/infra/messaging/kafka/controllers/add-champion.controller'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { NestAddChampionUseCase } from '../use-cases/nest-add-champion'
import { MessageEmitter } from '@/domain/messaging/message-emitter'
import { ValidateOwnedItemController } from '@/infra/messaging/kafka/controllers/validate-owned-item.controller'
import { ValidateOwnedChampionUseCase } from '@/domain/application/use-cases/validate-owned-champion'
import { NestValidateOwnedChampionUseCase } from '@/infra/use-cases/nest-validate-owned-champion'

@Module({
  imports: [DatabaseModule],
  controllers: [AddChampionController, ValidateOwnedItemController],
  providers: [
    EnvService,
    {
      provide: MessageEmitter,
      useClass: KafkaService,
    },
    {
      provide: AddChampionUseCase,
      useClass: NestAddChampionUseCase,
    },
    {
      provide: ValidateOwnedChampionUseCase,
      useClass: NestValidateOwnedChampionUseCase,
    },
  ],
  exports: [MessageEmitter],
})
export class MessagingModule {}
