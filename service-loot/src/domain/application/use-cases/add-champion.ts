import { Either, left, right } from '@/core/either'
import { ItemRepository } from '@/domain/application/repositories/item-repository'
import { ItemAlreadyExistsError } from '@/domain/application/use-cases/errors/item-already-exists-error'
import { Item, RarityTier } from '@/domain/enterprise/entities/item'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface AddChampionUseCaseParams {
  itemId: string
  name: string
  rarityTier: RarityTier
}

type AddChampionUseCaseResult = Either<ItemAlreadyExistsError, null>

export class AddChampionUseCase {
  constructor(private itemRepository: ItemRepository) {}

  async execute({
    itemId,
    name,
    rarityTier,
  }: AddChampionUseCaseParams): Promise<AddChampionUseCaseResult> {
    const itemExists = await this.itemRepository.findById(itemId)

    if (itemExists) {
      return left(new ItemAlreadyExistsError())
    }

    const item = Item.create({
      itemId: new UniqueEntityID(itemId),
      name,
      rarityTier,
      type: 'CHAMPION',
    })

    await this.itemRepository.create(item)

    return right(null)
  }
}
