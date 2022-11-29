import { Header } from '../Header'
import { AppShell, Box, Container, Placeholder } from '@sygris/ui'
import { ReactNode } from 'react'
import { Footer } from '../Footer'

export interface LayoutProps {
  isLogged: boolean
  children: ReactNode
}

export const Layout = ({ isLogged, children }: LayoutProps) => {
  if (!isLogged)
    return (
      <Box h={'100vh'} w={'100vw'}>
        <Placeholder />
      </Box>
    )

  return (
    <AppShell fixed header={<Header />} footer={<Footer />}>
      <Container h={'100%'}>{children}</Container>
    </AppShell>
  )
}
