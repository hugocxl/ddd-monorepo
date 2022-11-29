import { Card, Stack, Input, Button, Text } from '@mantine/core'
import { UserEmail, UserPassword } from '@sygris/core'
import { IconAt, IconLock } from '@tabler/icons'
import { SygrisText } from '../SygrisText'

export interface AuthFormProps {
  email: UserEmail
  password: UserPassword
  error: boolean
  isLoading: boolean
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeView: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  view: 'signin' | 'signup'
}

export function AuthForm({
  email,
  password,
  error,
  isLoading,
  onChangeInput,
  onChangeView,
  onSubmit,
  view,
}: AuthFormProps) {
  function getInputProps(name: string) {
    return {
      invalid: error,
      onChange: onChangeInput,
      sx: { width: '100%' },
      type: name,
      name,
      icon: <IconAt size={16} />,
      placeholder: `Enter your ${name}...`,
    }
  }

  function renderFooter() {
    const commonProps = {
      span: true,
      onClick: onChangeView,
    }
    if (view === 'signin') {
      return (
        <>
          Don’t have an account?{' '}
          <Text variant='link' {...commonProps}>
            Sign up
          </Text>
        </>
      )
    }

    return (
      <>
        Have an account already?{' '}
        <Text variant='link' {...commonProps}>
          Sign in
        </Text>
      </>
    )
  }

  return (
    <Card
      component={'form'}
      onSubmit={onSubmit}
      p={'xl'}
      w={'100%'}
      maw={'320px'}
      withBorder
    >
      <Stack align={'center'} justify={'center'}>
        <SygrisText mb={'xl'} />
        <Input {...getInputProps('email')} variant={'filled'} value={email} />
        <Input
          {...getInputProps('password')}
          icon={<IconLock size={16} />}
          variant={'filled'}
          value={password}
        />
        <Button
          fullWidth
          type={'submit'}
          variant={'filled'}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : view === 'signin' ? 'Sign in' : 'Sign up'}
        </Button>

        <Text size={'xs'} color={'dimmed'}>
          {renderFooter()}
        </Text>
      </Stack>
    </Card>
  )
}
