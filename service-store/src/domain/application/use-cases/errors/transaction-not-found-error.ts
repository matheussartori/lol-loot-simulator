import { UseCaseError } from '@/core/errors/use-case-error'

export class TransactionNotFoundError extends Error implements UseCaseError {
  constructor() {
    super('Transaction not found.')
  }
}
