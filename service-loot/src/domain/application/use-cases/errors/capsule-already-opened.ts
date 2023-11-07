import { UseCaseError } from '@/core/errors/use-case-error'

export class CapsuleAlreadyOpenedError extends Error implements UseCaseError {
  constructor() {
    super('Capsule already opened.')
  }
}
