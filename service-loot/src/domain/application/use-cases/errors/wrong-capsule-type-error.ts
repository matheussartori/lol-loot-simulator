import { UseCaseError } from '@/core/errors/use-case-error'

export class WrongCapsuleTypeError extends Error implements UseCaseError {
  constructor() {
    super('Wrong capsule type.')
  }
}
