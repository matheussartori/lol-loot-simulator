import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { AddChampionUseCase } from '@/domain/application/use-cases/add-champion'
import { NestAddChampionUseCase } from '../use-cases/nest-add-champion'
import { DatabaseModule } from '../database/database.module'
import { ChampionAddedController } from './controllers/champion-added.controller'
import { KafkaService } from './kafka.service'
import { CreateUserController } from './controllers/create-user.controller'
import { CreateUserUseCase } from '@/domain/application/use-cases/create-user'
import { NestCreateUserUseCase } from '../use-cases/nest-create-user'

@Module({
  imports: [DatabaseModule],
  controllers: [ChampionAddedController, CreateUserController],
  providers: [
    EnvService,
    KafkaService,
    {
      provide: AddChampionUseCase,
      useClass: NestAddChampionUseCase,
    },
    {
      provide: CreateUserUseCase,
      useClass: NestCreateUserUseCase,
    },
  ],
  exports: [KafkaService],
})
export class MessagingModule {}
