import { BoxCard, Input, Stack } from '@sygris/ui'

export interface FilterCardProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function FilterCard({ value, onChange }: FilterCardProps) {
  return (
    <BoxCard title={'Filter'}>
      <Stack>
        <Input
          value={value}
          onChange={onChange}
          placeholder='Filter nodes...'
          variant={'filled'}
        />
      </Stack>
    </BoxCard>
  )
}
