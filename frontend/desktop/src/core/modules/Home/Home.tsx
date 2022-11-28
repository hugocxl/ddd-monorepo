import { NextPage } from 'next'
import { NodeID, NodeName, NodeParentID, Nodes, Node } from '@sygris/core'
import {
  Button,
  SimpleGrid,
  Table,
  Title,
  useMutateServer,
  useQueryServer,
} from '@sygris/ui'

interface CreateNodeArgs {
  name: NodeName
  parentId: NodeParentID
}

interface DeleteNodeArgs {
  id: NodeID
}

const Home: NextPage = () => {
  const { data } = useQueryServer<Nodes>('nodes.all')
  const { mutate: createNode } = useMutateServer<CreateNodeArgs, Node>(
    'nodes.create'
  )
  const { mutate: deleteNode } = useMutateServer<DeleteNodeArgs, Node>(
    'nodes.delete'
  )

  function onClick() {
    const random = (Math.random() * 1000).toFixed(0)
    createNode({ name: `Node: ${random}`, parentId: Number(random) })
  }

  function onDelete(node: Node) {
    deleteNode({ id: node.id })
  }

  return (
    <SimpleGrid cols={1} sx={{ gridTemplateRows: 'auto 1fr' }}>
      <Title>Nodes</Title>
      <Button onClick={onClick} variant='subtle'>
        add new
      </Button>
      <Table
        onClickRow={onDelete}
        data={data}
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
