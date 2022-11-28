import { useAuth } from '../useAuth'
import { useMutation, useQueryClient } from 'react-query'
import { MUTABLE_SERVER_STATE } from './mutableServerState'

export const useMutateServer = <T, S>(
  mutationId: string & NestedKeyOf<typeof MUTABLE_SERVER_STATE>
) => {
  const queryClient = useQueryClient()
  const [{ user }] = useAuth()
  const [module, section] = mutationId.split('.')
  const { mutationFn, mutationKey } = MUTABLE_SERVER_STATE[module][section]
  const serverFn = async (variables) => {
    const response = await mutationFn({
      ...variables,
      token: user.token,
    })

    if (response.message) {
      throw new Error(response.message)
    }

    return response
  }

  return useMutation<S, Error, T>(serverFn, {
    mutationKey: mutationKey,
    onSuccess: async () => {
      console.log('onSuccess ASDJFAKLSÑDFJKADSLÑKFJKASDJDAFJL')
      for (const key of mutationKey) {
        queryClient.invalidateQueries(key)
      }
    },
  })
}
