import { Module } from '@nestjs/common'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { DatabaseModule } from '../database/database.module'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateAccountUseCase } from '@/domain/application/use-cases/create-account'
import { NestCreateAccountUseCase } from '../use-cases/nest-create-account'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [CreateAccountController],
  providers: [
    {
      provide: CreateAccountUseCase,
      useClass: NestCreateAccountUseCase,
    },
  ],
})
export class HttpModule {}
