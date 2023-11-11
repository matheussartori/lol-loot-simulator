export abstract class ValueObject<Attributes> {
  protected attributes: Attributes

  protected constructor(attributes: Attributes) {
    this.attributes = attributes
  }

  public equals(vo: ValueObject<unknown>) {
    if (vo === null || vo === undefined) {
      return false
    }

    if (vo.attributes === undefined) {
      return false
    }

    return JSON.stringify(vo.attributes) === JSON.stringify(this.attributes)
  }
}