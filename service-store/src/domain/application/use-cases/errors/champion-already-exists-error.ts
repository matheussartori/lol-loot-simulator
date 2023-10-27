import { UseCaseError } from '@/core/errors/use-case-error'

export class ChampionAlreadyExistsError extends Error implements UseCaseError {
  constructor() {
    super('Champion already exists.')
  }
}
