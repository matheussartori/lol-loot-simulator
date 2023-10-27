import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvModule } from './env/env.module'
import { envSchema } from './env/env'
import { MessagingModule } from './messaging/messaging.module'
import { AuthModule } from './auth/auth.module'
import { HttpModule } from './http/http.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
    MessagingModule,
    EnvModule,
  ],
})
export class AppModule {}
