import { PurchaseChampionUseCase } from '@/domain/application/use-cases/purchase-champion'
import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  NotFoundException,
  Post,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.stategy'
import { ItemNotFoundError } from '@/domain/application/use-cases/errors/item-not-found-error'

const purchaseChampionBodySchema = z.object({
  championId: z.string(),
  currency: z.union([z.literal('BLUE_ESSENCE'), z.literal('RIOT_POINTS')]),
})

type PurchaseChampionBodySchema = z.infer<typeof purchaseChampionBodySchema>

const bodyValidationPipe = new ZodValidationPipe(purchaseChampionBodySchema)

@Controller('/purchases/champions')
export class PurchaseChampionController {
  constructor(private purchaseChampion: PurchaseChampionUseCase) {}

  @Post()
  @HttpCode(201)
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(bodyValidationPipe) body: PurchaseChampionBodySchema,
  ) {
    const { championId } = body

    const result = await this.purchaseChampion.execute({
      userId: user.sub,
      championId,
      currency: 'BLUE_ESSENCE',
    })

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case ItemNotFoundError:
          throw new NotFoundException(error.message)
        default:
          throw new BadRequestException(error.message)
      }
    }
  }
}
