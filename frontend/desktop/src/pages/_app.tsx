import { AppShell, SygrisProvider, useAuth } from '@sygris/ui'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [{ isLogged }] = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLogged) {
      router.push('/auth')
    }
  }, [isLogged, router])

  return (
    <SygrisProvider>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SygrisProvider>
  )
}
