import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Champion } from '@/domain/enterprise/entities/champion'
import { Entity } from '@/core/entities/entity'
import { Optional } from '@/core/types/optional'

interface ChampionCapsuleAttributes {
  minChampionAmount: number
  maxChampionAmount: number
}

export class ChampionCapsule extends Entity<ChampionCapsuleAttributes> {
  open(items: Champion[]): Champion[] {
    const numItemsToSelect =
      Math.floor(Math.random() * this.attributes.maxChampionAmount) +
      this.attributes.minChampionAmount

    const shuffledItems = [...items]
    for (let i = shuffledItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledItems[i], shuffledItems[j]] = [
        shuffledItems[j],
        shuffledItems[i],
      ]
    }

    const selectedItems = shuffledItems.slice(0, numItemsToSelect)

    return selectedItems
  }

  static create(
    attributes?: Optional<
      ChampionCapsuleAttributes,
      'minChampionAmount' | 'maxChampionAmount'
    >,
    id?: UniqueEntityID,
  ) {
    const championCapsule = new ChampionCapsule(
      {
        ...attributes,
        minChampionAmount: 1,
        maxChampionAmount: 3,
      },
      id,
    )

    return championCapsule
  }
}
