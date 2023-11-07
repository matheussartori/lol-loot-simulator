import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { OpenChampionCapsuleController } from './controllers/open-champion-capsule.controller'
import { OpenChampionCapsuleUseCase } from '@/domain/application/use-cases/open-champion-capsule'
import { NestOpenChampionCapsuleUseCase } from '../use-cases/nest-open-champion-capsule'

@Module({
  imports: [DatabaseModule],
  controllers: [OpenChampionCapsuleController],
  providers: [
    {
      provide: OpenChampionCapsuleUseCase,
      useClass: NestOpenChampionCapsuleUseCase,
    },
  ],
})
export class HttpModule {}
