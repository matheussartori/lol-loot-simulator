import { randomUUID } from 'node:crypto'

interface CorrelationIDAttributes {
  value?: string
  name: string
  withPrevious?: string
}

export class CorrelationID {
  private readonly _value: string
  private readonly _name: string
  private readonly _withPrevious: string

  toString() {
    return `${this.withString}${this.name}(${this.value})`
  }

  get withString() {
    if (!this._withPrevious) {
      return ''
    }

    return `${this._withPrevious}-`
  }

  get name() {
    return this._name
  }

  get value() {
    return this._value
  }

  constructor({ name, withPrevious, value }: CorrelationIDAttributes) {
    this._value = value ?? randomUUID()
    this._name = name
    this._withPrevious = withPrevious ?? ''
  }

  public equals(id: CorrelationID) {
    return id.toString() === this.value
  }
}
