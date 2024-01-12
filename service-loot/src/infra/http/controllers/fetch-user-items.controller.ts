import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.stategy'
import { Controller, BadRequestException, Get } from '@nestjs/common'
import { UserItemPresenter } from '../presenters/user-item-presenter'
import { FetchUserItemsUseCase } from '@/domain/application/use-cases/fetch-user-items'
import { UserCapsulePresenter } from '../presenters/user-capsule-presenter'

@Controller('/user_items')
export class FetchUserItemsController {
  constructor(private fetchUserItems: FetchUserItemsUseCase) {}

  @Get()
  async handle(@CurrentUser() user: UserPayload) {
    const result = await this.fetchUserItems.execute({
      userId: user.sub,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { userItems, userCapsules } = result.value

    return {
      userItems: userItems.map(UserItemPresenter.toHTTP),
      userCapsules: userCapsules.map(UserCapsulePresenter.toHTTP),
    }
  }
}
