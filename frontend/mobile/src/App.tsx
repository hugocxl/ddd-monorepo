import { AppShell, AuthForm, Box, SygrisProvider } from '@sygris/ui'

function App() {
  return (
    <SygrisProvider>
      <AppShell>
        <Box
          h={'100%'}
          w={'100%'}
          display={'flex'}
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          {/* @ts-expect-error */}
          <AuthForm />
        </Box>
      </AppShell>
    </SygrisProvider>
  )
}

export default App
