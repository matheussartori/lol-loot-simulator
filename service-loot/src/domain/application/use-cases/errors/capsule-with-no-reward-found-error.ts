import { UseCaseError } from '@/core/errors/use-case-error'

export class CapsuleWithNoRewardFoundError
  extends Error
  implements UseCaseError
{
  constructor() {
    super('Capsule with no reward found.')
  }
}
