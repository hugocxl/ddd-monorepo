import { proxy, useSnapshot } from 'valtio'
import { UserSignUpDTO, UserDTO } from '@sygris/core'

const BASE_API = 'http://localhost:8000'

interface AuthState {
  user: UserDTO | null
  isLogged: boolean
  isLoading: boolean
  error: string | null
}

interface AuthUtils {
  signUp: (user: UserSignUpDTO) => Promise<void>
}

const initialState: AuthState = {
  user: null,
  isLogged: false,
  isLoading: false,
  error: null,
}

const state = proxy(initialState)

export function useAuth(): [AuthState, AuthUtils] {
  const stateSnap = useSnapshot<AuthState>(state)

  async function signUp(user: UserSignUpDTO) {
    state.isLoading = true

    return fetch(`${BASE_API}/users/signup`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message) {
          state.error = json.message
          state.isLogged = false
        } else {
          state.user = json
          state.isLogged = true
          state.error = null
        }
      })
      .catch((error) => {
        state.error = error?.message || 'Something went wrong'
        state.isLogged = false
      })
      .finally(() => {
        state.isLoading = false
      })
  }

  return [stateSnap, { signUp }]
}
