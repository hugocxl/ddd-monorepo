import { Box, BoxProps } from '@mantine/core'
import { SygrisText } from '../SygrisText'

export interface PlaceholderProps extends BoxProps {}

export function Placeholder(props: PlaceholderProps) {
  return (
    <Box
      h={'100%'}
      w={'100%'}
      display={'flex'}
      sx={{ alignItems: 'center', justifyContent: 'center' }}
      {...props}
    >
      <SygrisText />
    </Box>
  )
}
