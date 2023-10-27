import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvModule } from './env/env.module'
import { envSchema } from './env/env'
import { MessagingModule } from './messaging/messaging.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    MessagingModule,
  ],
})
export class AppModule {}
