import { NextPage } from 'next'
import {
  Stack,
  Button,
  Title,
  SimpleGrid,
  Input,
  IconAt,
  Box,
} from '@sygris/ui'
import { useState } from 'react'

const SignIn: NextPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(form)
    window.alert('GOOD')
  }

  return (
    <SimpleGrid cols={2} h={'100%'} sx={{ placeItems: 'center' }}>
      <h1>Sygris</h1>
      <Box component={'form'} onSubmit={onSubmit} h={'100%'}>
        <Stack align={'center'} w={'400px'} justify={'center'}>
          <Title order={2} variant={'gradient'}>
            Login
          </Title>

          <Input
            sx={{ width: '100%' }}
            onChange={onChange}
            type={'email'}
            value={form.email}
            variant={'default'}
            placeholder='Your email'
            name={'email'}
            icon={<IconAt size={16} />}
          />
          <Input
            sx={{ width: '100%' }}
            onChange={onChange}
            type={'password'}
            value={form.password}
            variant={'default'}
            placeholder='Your password'
            name={'password'}
            icon={<IconAt size={16} />}
          />
          <Button fullWidth type={'submit'} variant={'filled'}>
            Sign in
          </Button>
        </Stack>
      </Box>
    </SimpleGrid>
  )
}

export { SignIn }
