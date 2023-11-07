import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.stategy'
import {
  Controller,
  BadRequestException,
  Post,
  Body,
  ConflictException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common'
import { OpenChampionCapsuleUseCase } from '@/domain/application/use-cases/open-champion-capsule'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { CapsuleNotFoundError } from '@/domain/application/use-cases/errors/capsule-not-found-error'
import { ForbiddenCapsuleError } from '@/domain/application/use-cases/errors/forbidden-capsule-error'
import { WrongCapsuleTypeError } from '@/domain/application/use-cases/errors/wrong-capsule-type-error'
import { UserItemPresenter } from '../presenters/user-item-presenter'
import { CapsuleAlreadyOpenedError } from '@/domain/application/use-cases/errors/capsule-already-opened'

const openChampionCapsuleBodySchema = z.object({
  userCapsuleId: z.string().uuid(),
})

type OpenChampionCapsuleBodySchema = z.infer<
  typeof openChampionCapsuleBodySchema
>

const bodyValidationPipe = new ZodValidationPipe(openChampionCapsuleBodySchema)

@Controller('/capsules/champion_capsule/open')
export class OpenChampionCapsuleController {
  constructor(private openChampionCapsule: OpenChampionCapsuleUseCase) {}

  @Post()
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(bodyValidationPipe) body: OpenChampionCapsuleBodySchema,
  ) {
    const result = await this.openChampionCapsule.execute({
      userCapsuleId: body.userCapsuleId,
      userId: user.sub,
    })

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case CapsuleNotFoundError:
          throw new NotFoundException(error.message)
        case ForbiddenCapsuleError:
          throw new ForbiddenException(error.message)
        case WrongCapsuleTypeError:
        case CapsuleAlreadyOpenedError:
          throw new ConflictException(error.message)
        default:
          throw new BadRequestException(error.message)
      }
    }

    const earnedItems = result.value.earnedItems

    return {
      earnedItems: earnedItems.map(UserItemPresenter.toHTTP),
    }
  }
}
