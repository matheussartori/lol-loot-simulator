import { Either, left, right } from '@/core/either'
import { ItemRepository } from '@/domain/application/repositories/item-repository'
import { ItemAlreadyExistsError } from '@/domain/application/use-cases/errors/item-already-exists-error'
import { Item } from '@/domain/enterprise/entities/item'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { RarityTier } from '@/domain/enterprise/entities/rarity'
import { CapsuleRepository } from '@/domain/application/repositories/capsule-repository'
import { CapsuleNotFoundError } from '@/domain/application/use-cases/errors/capsule-not-found-error'
import { CapsuleItemRepository } from '@/domain/application/repositories/capsule-item-repository'
import { CapsuleItem } from '@/domain/enterprise/entities/capsule-item'

interface AddChampionUseCaseParams {
  itemId: string
  name: string
  rarityTier: RarityTier
}

type AddChampionUseCaseResult = Either<
  ItemAlreadyExistsError | CapsuleNotFoundError,
  null
>

export class AddChampionUseCase {
  constructor(
    private itemRepository: ItemRepository,
    private capsuleRepository: CapsuleRepository,
    private capsuleItemRepository: CapsuleItemRepository,
  ) {}

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

    const championCapsule =
      await this.capsuleRepository.findBySlug('CHAMPION_CAPSULE')

    if (!championCapsule) {
      return left(new CapsuleNotFoundError())
    }

    const capsuleItem = CapsuleItem.create({
      itemId: new UniqueEntityID(itemId),
      capsuleId: championCapsule.id,
    })

    await this.capsuleItemRepository.create(capsuleItem)

    return right(null)
  }
}
