import { ChampionWithImages } from '@/domain/enterprise/entities/value-objects/champion-with-images'
import { ChampionPresenter } from '@/infra/http/presenters/champion-presenter'

export class ChampionWithImagesPresenter {
  private readonly catalogStaticFilesUrl: string

  constructor(catalogStaticFilesUrl: string) {
    this.catalogStaticFilesUrl = catalogStaticFilesUrl
    this.toHTTP = this.toHTTP.bind(this)
  }

  toHTTP(championWithImages: ChampionWithImages) {
    return {
      ...ChampionPresenter.toHTTP(championWithImages.champion),
      images: championWithImages.images.map((championWithImage) => ({
        type: championWithImage.type,
        url: this.catalogStaticFilesUrl + championWithImage.url,
      })),
    }
  }
}
