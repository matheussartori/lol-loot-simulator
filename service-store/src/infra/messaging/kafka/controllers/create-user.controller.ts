import { CreateUserUseCase } from '@/domain/application/use-cases/create-user'
import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'

interface CreateUserMessage {
  userId: string
}

@Controller()
export class CreateUserController {
  constructor(private createUser: CreateUserUseCase) {}

  @MessagePattern('user.created')
  async handle(@Payload() message: CreateUserMessage) {
    await this.createUser.execute({
      userId: message.userId,
    })
  }
}
