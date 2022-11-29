import {
  ActionIcon,
  Container,
  Group,
  Header as MnHeader,
  IconLogout,
  IconMoon,
  IconSun,
  SygrisText,
  useAuth,
  useThemeMode,
} from '@sygris/ui'

const HEADER_HEIGHT = 60

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const [mode, toggleMode] = useThemeMode()
  const [_, { signOut }] = useAuth()

  function ThemeButton() {
    return (
      <ActionIcon size={'lg'} variant={'default'} onClick={toggleMode}>
        {mode === 'dark' ? <IconMoon size={18} /> : <IconSun size={18} />}
      </ActionIcon>
    )
  }

  function LogoutButton() {
    return (
      <ActionIcon size={'lg'} variant={'default'} onClick={signOut}>
        <IconLogout size={18} />
      </ActionIcon>
    )
  }

  return (
    <MnHeader
      height={HEADER_HEIGHT}
      sx={{ background: 'transparent', backdropFilter: 'blur(10px)' }}
    >
      <Container h={'100%'}>
        <Group position={'apart'} align={'center'} h={'100%'}>
          <SygrisText h={'50%'} />
          <Group spacing={'xs'}>
            <ThemeButton />
            <LogoutButton />
          </Group>
        </Group>
      </Container>
    </MnHeader>
  )
}
