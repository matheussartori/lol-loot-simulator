import { randomUUID } from 'node:crypto'

export class UniqueEntityID {
  private readonly value: string

  toString() {
    return this.value
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }

  public equals(id: UniqueEntityID) {
    return id.toString() === this.value
  }
}
