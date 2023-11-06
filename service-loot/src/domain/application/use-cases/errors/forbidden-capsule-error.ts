import { UseCaseError } from '@/core/errors/use-case-error'

export class ForbiddenCapsuleError extends Error implements UseCaseError {
  constructor() {
    super('This capsule does not belong to the user.')
  }
}
