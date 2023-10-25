import { Module } from '@nestjs/common'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { DatabaseModule } from '../database/database.module'
import { CreateUserController } from './controllers/create-user.controller'
import { NestCreateUserUseCase } from '../use-cases/NestCreateUserUseCase'
import { CreateUserUseCase } from '@/domain/application/use-cases/create-user'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [CreateUserController],
  providers: [
    {
      provide: CreateUserUseCase,
      useClass: NestCreateUserUseCase,
    },
  ],
})
export class HttpModule {}
