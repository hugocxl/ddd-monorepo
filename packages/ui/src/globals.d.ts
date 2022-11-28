// https://github.com/pmndrs/valtio/issues/327
import 'valtio'

declare module 'valtio' {
  function useSnapshot<T extends object>(p: T): T
}

declare global {
  type NestedKeyOf<ObjectType> = {
    [Key in keyof ObjectType &
      (string | number)]: ObjectType[Key] extends object
      ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
      : `${Key}`
  }[keyof ObjectType & (string | number)]
}
