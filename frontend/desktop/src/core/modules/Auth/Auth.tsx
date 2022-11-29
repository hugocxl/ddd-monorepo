import { UserSignUpDTO } from '@sygris/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useAuth, Box, AuthForm } from '@sygris/ui'

const Auth: NextPage = () => {
  const [view, setView] = useState<'signin' | 'signup'>('signin')
  const [{ isLoading, error, isLogged }, { signUp, signIn }] = useAuth()
  const router = useRouter()
  const [form, setForm] = useState<UserSignUpDTO>({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (isLogged) {
      router.push('/')
    }
  }, [isLogged, router])

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function onChangeView() {
    setView(view === 'signin' ? 'signup' : 'signin')
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (view !== 'signin') {
      signUp(form)
    } else {
      signIn(form)
    }
  }

  return (
    <Box h={'100vh'} w={'100%'} display={'grid'} sx={{ placeItems: 'center' }}>
      <AuthForm
        {...form}
        onChangeInput={onChangeInput}
        onChangeView={onChangeView}
        onSubmit={onSubmit}
        view={view}
        error={Boolean(error)}
        isLoading={isLoading}
      />
    </Box>
  )
}

export { Auth }
