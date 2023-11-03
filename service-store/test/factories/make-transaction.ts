import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { faker } from '@faker-js/faker'
import {
  Transaction,
  TransactionAttributes,
} from '@/domain/enterprise/entities/transaction'

export function makeTransaction(
  override: Partial<TransactionAttributes> = {},
  id?: UniqueEntityID,
) {
  const transaction = Transaction.create(
    {
      userId: new UniqueEntityID(faker.string.uuid()),
      status: 'PENDING',
      createdAt: faker.date.past(),
      amount: faker.number.int({ min: 400, max: 7800 }),
      currency: faker.helpers.arrayElement(['RIOT_POINTS', 'BLUE_ESSENCE']),
      type: faker.helpers.arrayElement(['CHAMPION', 'SKIN', 'CHROMA']),
      itemId: new UniqueEntityID(faker.string.uuid()),
      ...override,
    },
    id,
  )

  return transaction
}
