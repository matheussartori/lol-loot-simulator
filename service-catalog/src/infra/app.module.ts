import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EnvModule } from './env/env.module'
import { envSchema } from './env/env'
import { MessagingModule } from './messaging/messaging.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { HttpModule } from '@/infra/http/http.module'
import { AuthModule } from '@/infra/auth/auth.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'static'),
      serveRoot: '/static',
    }),
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    AuthModule,
    HttpModule,
    MessagingModule,
  ],
})
export class AppModule {}
