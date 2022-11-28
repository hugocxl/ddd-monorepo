// Dependencies
import { useAuth } from '../useAuth'
import { useQuery } from 'react-query'
import { SERVER_STATE } from './serverState'

// Known issue: we can access the methods from queryKey and queryFn
// as they are based on the object prototype
type NestedKeyOf<ObjectType> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

export const useServer = <S>(
  queryId: string & NestedKeyOf<typeof SERVER_STATE>,
  args: any = {}
) => {
  const [{ isLogged, user }] = useAuth()
  const [module, section] = queryId.split('.')
  const query = SERVER_STATE[module][section]

  return useQuery<S, string>(query.queryKey, async () => {
    if (isLogged) {
      const result = await query.queryFn<S>({ token: user.token, ...args })

      if (result.message) {
        throw new Error(result.message)
      }

      return result
    }
  })
}
