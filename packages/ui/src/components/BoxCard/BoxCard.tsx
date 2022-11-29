import { Card, CardProps, Text } from '@mantine/core'
import { ReactNode } from 'react'

interface BoxCardProps extends CardProps {
  children: ReactNode
  title: string
}

export function BoxCard({ title, children, sx = {}, ...rest }: BoxCardProps) {
  return (
    <Card
      {...rest}
      withBorder
      p={'md'}
      sx={{
        display: 'grid',
        gridTemplateRows: '30px minmax(0, 1fr)',
        overflow: 'auto',
        gap: '8px',
        ...sx,
      }}
    >
      <Text fw={'bold'} size={'xs'}>
        {title}
      </Text>
      {children}
    </Card>
  )
}
