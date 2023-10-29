import { Module } from '@nestjs/common'
import { EnvService } from '../env/env.service'
import { DatabaseModule } from '../database/database.module'
import { KafkaService } from './kafka.service'
import { MakePurchaseController } from './controllers/make-purchase.controller'
import { MakePurchaseUseCase } from '@/domain/application/use-cases/make-purchase'
import { NestMakePurchaseUseCase } from '../use-cases/nest-make-purhcase'

@Module({
  imports: [DatabaseModule],
  controllers: [MakePurchaseController],
  providers: [
    EnvService,
    KafkaService,
    {
      provide: MakePurchaseUseCase,
      useClass: NestMakePurchaseUseCase,
    },
  ],
  exports: [KafkaService],
})
export class MessagingModule {}
