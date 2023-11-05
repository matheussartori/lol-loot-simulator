import { UseCaseError } from '@/core/errors/use-case-error'

export class CapsuleNotFoundError extends Error implements UseCaseError {
  constructor() {
    super('Capsule not found.')
  }
}
