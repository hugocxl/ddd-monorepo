import { NodeName, NodeParentID } from '@sygris/core'
import { BoxCard, Stack, Input, Button } from '@sygris/ui'

export interface CreateNodeCardProps {
  name: NodeName
  parentId: NodeParentID
  onClick: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function CreateNodeCard({
  name,
  parentId,
  onClick,
  onChange,
}: CreateNodeCardProps) {
  return (
    <BoxCard title={'Create Node'}>
      <Stack justify={'center'}>
        <Input.Wrapper label={'Name'}>
          <Input
            type={'text'}
            onChange={onChange}
            placeholder='Enter node name...'
            variant={'filled'}
            name={'name'}
            value={name}
          />
        </Input.Wrapper>
        <Input.Wrapper label={'Parent ID'}>
          <Input
            type={'number'}
            onChange={onChange}
            placeholder='Enter node parent id...'
            variant={'filled'}
            name={'parentId'}
            value={parentId}
          />
        </Input.Wrapper>
        <Button variant='filled' onClick={onClick}>
          Create node
        </Button>
      </Stack>
    </BoxCard>
  )
}
