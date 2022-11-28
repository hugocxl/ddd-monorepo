import { CreateNodeRequest, DeleteNodeRequest } from '@sygris/core'
import { fetcher } from '../../lib'

export const BASE_API = 'http://localhost:8000'
export const MUTABLE_SERVER_STATE = {
  nodes: {
    create: {
      mutationKey: ['nodes', 'create'],
      mutationFn: <S>(req: CreateNodeRequest) =>
        fetcher<S>(`${BASE_API}/nodes/create`, {
          method: 'POST',
          body: JSON.stringify(req),
          headers: {
            'Content-Type': 'application/json',
          },
        }),
    },
    delete: {
      mutationKey: ['nodes'],
      mutationFn: <S>(req: DeleteNodeRequest) =>
        fetch(`${BASE_API}/nodes/delete`, {
          method: 'POST',
          body: JSON.stringify(req),
          headers: {
            'Content-Type': 'application/json',
          },
        }),
    },
    edit: {
      mutationKey: ['nodes'],
      mutationFn: <S>(req: DeleteNodeRequest) =>
        fetcher<S>(`${BASE_API}/nodes/edit`, {
          method: 'POST',
          body: JSON.stringify(req),
          headers: {
            'Content-Type': 'application/json',
          },
        }),
    },
  },
}
