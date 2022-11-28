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

interface EditNodeArgs {
  id: NodeID
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
  const { mutate: editNode } = useMutateServer<EditNodeArgs, Node>('nodes.edit')

  function onAdd() {
    const random = (Math.random() * 1000).toFixed(0)
    createNode({ name: `Node: ${random}`, parentId: Number(random) })
  }

  function onDelete(node: Node) {
    deleteNode({ id: node.id })
  }

  function onEdit(node: Node) {
    const random = (Math.random() * 1000).toFixed(0)
    editNode({
      id: node.id,
      name: `Node: ${random}`,
      parentId: Number(random),
    })
  }

  return (
    <SimpleGrid cols={1} sx={{ gridTemplateRows: 'auto 1fr' }}>
      <Title>Nodes</Title>
      <Button onClick={onAdd} variant='subtle'>
        add new
      </Button>
      <Table
        onClickRow={onEdit}
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
