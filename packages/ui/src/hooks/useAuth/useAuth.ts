import { proxy, useSnapshot } from 'valtio'
import { UserSignUpDTO, UserAuthDTO, UserSignInDTO } from '@sygris/core'
import { useCallback } from 'react'

interface AuthState {
  user: UserAuthDTO | null
  isLogged: boolean
  isLoading: boolean
  error: string | null
}

interface AuthUtils {
  signUp: (user: UserSignUpDTO) => Promise<void>
  signIn: (user: UserSignInDTO) => Promise<void>
}

const BASE_API = 'http://localhost:8000'
const initialState: AuthState = {
  user: null,
  isLogged: false,
  isLoading: false,
  error: null,
}
const state = proxy(initialState)

function createCaller<T>(url: string) {
  return async (req: T) => {
    state.isLoading = true

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      })
      if (response.ok) {
        const jsonRes = await response.json()
        if (jsonRes.email) {
          state.user = jsonRes
          state.isLogged = true
          state.error = null
        } else {
          state.isLogged = false
          state.error = jsonRes.message
        }
      } else {
        state.error = 'Something went wrong'
      }
    } catch (error: any) {
      state.error = error?.message || 'Something went wrong'
    }
    state.isLoading = false
  }
}

export function useAuth(): [AuthState, AuthUtils] {
  const stateSnap = useSnapshot<AuthState>(state)
  const signUp = useCallback(
    createCaller<UserSignUpDTO>(`${BASE_API}/users/signup`),
    []
  )
  const signIn = useCallback(
    createCaller<UserSignInDTO>(`${BASE_API}/users/signin`),
    []
  )

  return [stateSnap, { signUp, signIn }]
}
