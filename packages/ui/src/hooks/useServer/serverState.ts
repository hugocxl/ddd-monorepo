import { fetcher } from '../../lib'

export const BASE_API = 'http://localhost:8000'
export const SERVER_STATE = {
  nodes: {
    all: {
      queryKey: ['nodes', 'all'],
      queryFn: <S>({ token }) =>
        fetcher<S>(`${BASE_API}/nodes`, {
          method: 'POST',
          body: JSON.stringify({ token }),
          headers: {
            'Content-Type': 'application/json',
          },
        }),
    },
  },
}
