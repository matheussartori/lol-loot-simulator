import { Controller, Get, BadRequestException } from '@nestjs/common'
import { FetchCatalogUseCase } from '@/domain/application/use-cases/fetch-catalog'
import { ChampionWithImagesPresenter } from '@/infra/http/presenters/champion-with-images-presenter'
import { EnvService } from '@/infra/env/env.service'

@Controller('/catalog')
export class FetchCatalogController {
  constructor(
    private readonly fetchCatalog: FetchCatalogUseCase,
    private readonly config: EnvService,
  ) {}

  @Get()
  async handle() {
    const result = await this.fetchCatalog.execute()

    if (result.isLeft()) {
      throw new BadRequestException()
    }

    const { champions } = result.value

    const championWithImagesPresenter = new ChampionWithImagesPresenter(
      this.config.get('STATIC_FILES_URL'),
    )

    return {
      champions: champions.map(championWithImagesPresenter.toHTTP),
    }
  }
}
