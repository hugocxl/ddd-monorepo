// Types
import { NextPage } from 'next'

// Components
import NextLink from 'next/link'
import { Stack, Button, Title } from '@sygris/ui'

const NotFound: NextPage = () => {
  return (
    <div>
      <Stack align={'flex-start'} h={'100%'} justify={'center'}>
        <Title order={2} variant={'gradient'}>
          404 – Page not found
        </Title>
        <p>
          {`Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?`}
        </p>
        <NextLink href='/'>
          <Button variant={'default'} sx={{ mt: 4 }}>
            Return Home
          </Button>
        </NextLink>
      </Stack>
    </div>
  )
}

export default NotFound
