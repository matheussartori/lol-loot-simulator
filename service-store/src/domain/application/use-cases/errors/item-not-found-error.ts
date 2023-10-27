import { UseCaseError } from '@/core/errors/use-case-error'

export class ItemNotFoundError extends Error implements UseCaseError {
  constructor() {
    super('Item not found.')
  }
}
