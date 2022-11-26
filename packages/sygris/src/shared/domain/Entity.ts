export abstract class Entity<T> {
  public readonly props: T;

  constructor(props: T) {
    this.props = props;
  }

  // public equals(object?: Entity<T>): boolean {
  //   if (object == null || object == undefined) {
  //     return false
  //   }

  //   if (this === object) {
  //     return true
  //   }

  //   if (!isEntity(object)) {
  //     return false
  //   }

  //   return this._id.equals(object._id)
  // }
}
