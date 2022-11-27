import { AppShell, ThemeProvider } from '@sygris/ui'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </ThemeProvider>
  )
}
