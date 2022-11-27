import { UserSignUpDTO } from '@sygris/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import {
  Stack,
  useAuth,
  IconAlertCircle,
  IconLock,
  Alert,
  Button,
  Title,
  Input,
  IconAt,
  Box,
  Text,
} from '@sygris/ui'

function getInputProps(name: string) {
  return {
    sx: { width: '100%' },
    type: name,
    name,
    icon: <IconAt size={16} />,
    placeholder: `Enter your ${name}...`,
  }
}

const Auth: NextPage = () => {
  const [view, setView] = useState<'Sign in' | 'Sign up'>('Sign in')
  const [{ isLoading, error, user, isLogged }, { signUp, signIn }] = useAuth()
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
    setView(view === 'Sign in' ? 'Sign up' : 'Sign in')
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (view !== 'Sign in') {
      signUp(form)
    } else {
      signIn(form)
    }
  }

  return (
    <Box
      component={'form'}
      onSubmit={onSubmit}
      h={'100%'}
      w={'100%'}
      display={'grid'}
      sx={{ placeItems: 'center' }}
    >
      <Stack align={'center'} w={'280px'} justify={'center'}>
        <Title order={2}>{`Welcome to Sygris`}</Title>

        <Input
          {...getInputProps('email')}
          onChange={onChangeInput}
          value={form.email}
        />
        <Input
          {...getInputProps('password')}
          icon={<IconLock size={16} />}
          onChange={onChangeInput}
          value={form.password}
        />
        <Button
          fullWidth
          type={'submit'}
          variant={'filled'}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : view}
        </Button>

        <Text size={'xs'} color={'dimmed'}>
          {view === 'Sign in' ? (
            <>
              Don’t have an account?{' '}
              <Text span variant='link' onClick={onChangeView}>
                Sign up
              </Text>
            </>
          ) : (
            <>
              Have an account already?{' '}
              <Text span variant='link' onClick={onChangeView}>
                Sign in
              </Text>
            </>
          )}
        </Text>

        {error && (
          <Alert
            w={'100%'}
            icon={<IconAlertCircle size={16} />}
            title='Error'
            color='red'
          >
            {error}
          </Alert>
        )}

        {user && (
          <Alert
            w={'100%'}
            icon={<IconAlertCircle size={16} />}
            title='Success'
            color='green'
          >
            {JSON.stringify(user)}
          </Alert>
        )}
      </Stack>
    </Box>
  )
}

export { Auth }
