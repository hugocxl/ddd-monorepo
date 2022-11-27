import { NextPage } from 'next'
import {
  Stack,
  useAuth,
  IconAlertCircle,
  Alert,
  Button,
  Title,
  Input,
  IconAt,
  Box,
  Text,
} from '@sygris/ui'
import { UserSignUpDTO } from '@sygris/core'
import { useState } from 'react'

function getInputProps(name: string) {
  return {
    sx: { width: '100%' },
    type: name,
    name,
    icon: <IconAt size={16} />,
    placeholder: `Enter your ${name}...`,
  }
}

const SignUp: NextPage = () => {
  const [{ isLoading, error, user }, { signUp }] = useAuth()
  const [form, setForm] = useState<UserSignUpDTO>({
    email: '',
    password: '',
  })

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    signUp(form)
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
      <Stack align={'center'} w={'320px'} justify={'center'}>
        <Title order={2}>Create an account</Title>

        <Input
          {...getInputProps('email')}
          onChange={onChange}
          value={form.email}
        />
        <Input
          {...getInputProps('password')}
          onChange={onChange}
          value={form.password}
        />
        <Button
          fullWidth
          type={'submit'}
          variant={'filled'}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Signup'}
        </Button>

        {error && (
          <Alert icon={<IconAlertCircle size={20} />} title='Error' color='red'>
            {error}
          </Alert>
        )}
      </Stack>
    </Box>
  )
}

export { SignUp }
