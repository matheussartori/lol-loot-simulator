import { UseCaseError } from '@/core/errors/use-case-error'

export class ItemAlreadyExistsError extends Error implements UseCaseError {
  constructor() {
    super('Item already exists.')
  }
}
