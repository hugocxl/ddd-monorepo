import { Text, Container, Footer as MnFooter } from '@sygris/ui'

const FOOTER_HEIGHT = 32

interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <MnFooter
      height={FOOTER_HEIGHT}
      sx={{ background: 'transparent', backdropFilter: 'blur(10px)' }}
    >
      <Container
        h={'100%'}
        sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
      >
        <Text size={'xs'} color={'dimmed'}>
          {'Technical test for Sygris developed by @Hugo Corta'}
        </Text>
      </Container>
    </MnFooter>
  )
}
