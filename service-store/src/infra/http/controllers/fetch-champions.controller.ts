import { FetchChampionsUseCase } from '@/domain/application/use-cases/fetch-champions'
import { Controller, Get, BadRequestException } from '@nestjs/common'
import { ChampionPresenter } from '../presenters/champion-presenter'

@Controller('/champions')
export class FetchChampionsController {
  constructor(private readonly fetchChampions: FetchChampionsUseCase) {}

  @Get()
  async handle() {
    const result = await this.fetchChampions.execute()

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { champions } = result.value

    return {
      champions: champions.map(ChampionPresenter.toHTTP),
    }
  }
}
