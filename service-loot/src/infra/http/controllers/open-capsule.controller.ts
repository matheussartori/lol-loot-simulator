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
import { OpenCapsuleUseCase } from '@/domain/application/use-cases/open-capsule'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { CapsuleNotFoundError } from '@/domain/application/use-cases/errors/capsule-not-found-error'
import { ForbiddenCapsuleError } from '@/domain/application/use-cases/errors/forbidden-capsule-error'
import { UserItemPresenter } from '../presenters/user-item-presenter'
import { CapsuleAlreadyOpenedError } from '@/domain/application/use-cases/errors/capsule-already-opened'
import { CapsuleWithNoRewardFoundError } from '@/domain/application/use-cases/errors/capsule-with-no-reward-found-error'

const openCapsuleBodySchema = z.object({
  userCapsuleId: z.string().uuid(),
})

type OpenCapsuleBodySchema = z.infer<typeof openCapsuleBodySchema>

const bodyValidationPipe = new ZodValidationPipe(openCapsuleBodySchema)

@Controller('/capsules/open')
export class OpenCapsuleController {
  constructor(private openChampionCapsule: OpenCapsuleUseCase) {}

  @Post()
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(bodyValidationPipe) body: OpenCapsuleBodySchema,
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
        case CapsuleWithNoRewardFoundError:
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
