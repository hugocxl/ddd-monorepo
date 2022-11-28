import { NextPage } from 'next'
import { NodeName, NodeParentId, Nodes } from '@sygris/core'
import {
  Button,
  SimpleGrid,
  Table,
  Title,
  useMutateServer,
  useQueryServer,
} from '@sygris/ui'

interface MutationArgs {
  name: NodeName
  parentId: NodeParentId
}

const Home: NextPage = () => {
  const { data } = useQueryServer<Nodes>('nodes.all')
  const { mutate, isLoading, error } = useMutateServer<MutationArgs, Node>(
    'nodes.create'
  )

  function onClick() {
    const random = (Math.random() * 1000).toFixed(0)
    mutate({ name: `Node: ${random}`, parentId: Number(random) })
  }

  return (
    <SimpleGrid cols={1} sx={{ gridTemplateRows: 'auto 1fr' }}>
      <Title>Nodes</Title>
      <Button onClick={onClick} variant='subtle'>
        add new
      </Button>
      <Table
        data={data as any[]}
        columns={[
          { header: 'ID', key: 'id' },
          { header: 'Name', key: 'name' },
          { header: 'Parent', key: 'parentId' },
        ]}
      />
    </SimpleGrid>
  )
}

export { Home }
