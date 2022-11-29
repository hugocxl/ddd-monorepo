import { NodeName, NodeParentID } from '@sygris/core'
import { BoxCard, Stack, Input, Button, Flex, Text } from '@sygris/ui'

export interface EditNodeCardProps {
  name?: NodeName
  parentId?: NodeParentID
  onClick: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function EditNodeCard({
  name,
  parentId,
  onClick,
  onChange,
}: EditNodeCardProps) {
  function renderContent() {
    if (!name) {
      return (
        <Flex align={'center'} justify={'center'}>
          <Text color={'dimmed'} size={'xs'}>
            {'Select a node to edit'}
          </Text>
        </Flex>
      )
    }

    return (
      <Stack justify={'center'}>
        <Input.Wrapper label={'Name'}>
          <Input
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
          Edit node
        </Button>
      </Stack>
    )
  }

  return <BoxCard title={'Edit Node'}>{renderContent()}</BoxCard>
}
