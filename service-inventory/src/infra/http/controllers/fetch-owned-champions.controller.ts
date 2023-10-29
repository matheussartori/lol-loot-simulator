import { FetchOwnedChampionsUseCase } from '@/domain/application/use-cases/fetch-owned-champions'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jwt.stategy'
import { Controller, Get, BadRequestException } from '@nestjs/common'
import { ChampionPresenter } from '../presenters/champion-presenter'

@Controller('/champions')
export class FetchOwnedChampionsController {
  constructor(private fetchOwnedChampions: FetchOwnedChampionsUseCase) {}

  @Get()
  async handle(@CurrentUser() user: UserPayload) {
    const result = await this.fetchOwnedChampions.execute({
      userId: user.sub,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const champions = result.value.champions

    return {
      champions: champions.map(ChampionPresenter.toHTTP),
    }
  }
}
