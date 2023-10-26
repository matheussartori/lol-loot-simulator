import { Module } from '@nestjs/common'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { DatabaseModule } from '../database/database.module'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateAccountUseCase } from '@/domain/application/use-cases/create-account'
import { NestCreateAccountUseCase } from '../use-cases/nest-create-account'
import { AuthenticateUseCase } from '@/domain/application/use-cases/authenticate'
import { NestAuthenticateUseCase } from '../use-cases/nest-authenticate'
import { AuthenticateController } from './controllers/authenticate.controller'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [CreateAccountController, AuthenticateController],
  providers: [
    {
      provide: CreateAccountUseCase,
      useClass: NestCreateAccountUseCase,
    },
    {
      provide: AuthenticateUseCase,
      useClass: NestAuthenticateUseCase,
    },
  ],
})
export class HttpModule {}
