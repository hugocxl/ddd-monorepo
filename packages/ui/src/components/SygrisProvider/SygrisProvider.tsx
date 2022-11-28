import { ThemeProvider } from '../ThemeProvider'
import { ClientProvider } from '../ClientProvider'

export interface SygrisProviderProps {
  children: React.ReactNode
}

export function SygrisProvider({ children }: SygrisProviderProps) {
  return (
    <ClientProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ClientProvider>
  )
}
