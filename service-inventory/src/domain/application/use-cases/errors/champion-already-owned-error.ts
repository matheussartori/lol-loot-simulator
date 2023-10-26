import { UseCaseError } from '@/core/errors/use-case-error'

export class ChampionAlreadyOwnedError extends Error implements UseCaseError {
  constructor() {
    super('Champion already owned.')
  }
}
