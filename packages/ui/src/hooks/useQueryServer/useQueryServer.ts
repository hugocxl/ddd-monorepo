// Dependencies
import { useAuth } from '../useAuth'
import { useQuery } from 'react-query'
import { SERVER_STATE } from './serverState'

export const useQueryServer = <S>(
  queryId: string & NestedKeyOf<typeof SERVER_STATE>,
  args: any = {}
) => {
  const [{ isLogged, user }] = useAuth()
  const [module, section] = queryId.split('.')
  const query = SERVER_STATE[module][section]

  return useQuery<S, Error>(query.queryKey, async () => {
    if (isLogged) {
      const result = await query.queryFn<S>({ token: user.token, ...args })

      if (result.message) {
        throw new Error(result.message)
      }

      return result
    }
  })
}
