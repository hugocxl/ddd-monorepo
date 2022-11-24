// Components
import { Container, ThemeProvider, AppShell } from '@sygris/ui'

function App() {
  return (
    <ThemeProvider>
      <AppShell footer={<div>foootoer</div>}>
        <Container>MnContainer</Container>
      </AppShell>
    </ThemeProvider>
  )
}

export default App
