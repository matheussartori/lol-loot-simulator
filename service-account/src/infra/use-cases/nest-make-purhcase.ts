import { UserRepository } from '@/domain/application/repositories/user-repository'
import { MakePurchaseUseCase } from '@/domain/application/use-cases/make-purchase'
import { Injectable } from '@nestjs/common'
import { KafkaService } from '../messaging/kafka.service'

@Injectable()
export class NestMakePurchaseUseCase extends MakePurchaseUseCase {
  constructor(userRepository: UserRepository, kafka: KafkaService) {
    super(userRepository, kafka)
  }
}
