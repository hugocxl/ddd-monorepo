import { ActionIcon, ActionIconProps } from '@mantine/core'
// import SvgText from './sygris.svg'

export interface SygrisTextProps extends ActionIconProps {}

export const SygrisText = (props: SygrisTextProps) => {
  return <ActionIcon {...props}>Sygris</ActionIcon>
}
