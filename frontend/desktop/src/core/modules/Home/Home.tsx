import { NextPage } from 'next'
import { useMemo, useState } from 'react'
import { NodeID, NodeName, NodeParentID, Nodes, Node } from '@sygris/core'
import { Layout } from '@/core/shared'
import { CreateNodeCard, EditNodeCard, FilterCard } from './components'
import {
  Table,
  useAuth,
  useMutateServer,
  useQueryServer,
  Box,
  BoxCard,
  Group,
  ActionIcon,
  IconTrash,
  IconPencil,
} from '@sygris/ui'

interface CreateNodeArgs {
  name: NodeName
  parentId: NodeParentID
}

interface EditNodeArgs {
  id?: NodeID
  name?: NodeName
  parentId?: NodeParentID
}

interface DeleteNodeArgs {
  id: NodeID
}

const Home: NextPage = () => {
  const [{ isLogged }] = useAuth()
  const [search, setSearch] = useState('')
  const nodesQuery = useQueryServer<Nodes>('nodes.all')
  const createNodeMut = useMutateServer<CreateNodeArgs, Node>('nodes.create')
  const deleteNodeMut = useMutateServer<DeleteNodeArgs, Node>('nodes.delete')
  const editNodeMut = useMutateServer<EditNodeArgs, Node>('nodes.edit')
  const filteredNodes = useMemo(filterNodes, [search, nodesQuery.data])
  const [editNode, setEditNode] = useState<EditNodeArgs | null>(null)
  const [createNode, setCreateNode] = useState<CreateNodeArgs>({
    name: '',
    parentId: 0,
  })

  function onCreateNode() {
    createNodeMut.mutate({
      ...createNode,
      parentId: Number(createNode.parentId),
    })
    setCreateNode({ name: '', parentId: 0 })
  }

  function onEditNode() {
    if (!editNode) return
    editNodeMut.mutate({
      ...editNode,
      parentId: Number(editNode.parentId),
    })
    setEditNode(null)
  }

  function onDeleteNode(node: Node) {
    deleteNodeMut.mutate({ id: node.id })
  }

  function onSelectNode(node: Node) {
    setEditNode(node)
  }

  function filterNodes() {
    if (!nodesQuery.data) return []
    if (!search) return nodesQuery.data
    return nodesQuery.data.filter((node) => {
      return (
        node.name.toLowerCase().includes(search.toLowerCase()) ||
        node.id.toString().toLowerCase().includes(search.toLowerCase()) ||
        node.parentId.toString().toLowerCase().includes(search.toLowerCase())
      )
    })
  }

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  function onChangeCreateNode(e: React.ChangeEvent<HTMLInputElement>) {
    setCreateNode((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function onChangeEditNode(e: React.ChangeEvent<HTMLInputElement>) {
    setEditNode((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function tableActions(row: Node) {
    return (
      <Group spacing={'xs'}>
        <ActionIcon
          onClick={() => onSelectNode(row)}
          size={'md'}
          variant={'default'}
        >
          <IconPencil size={16} />
        </ActionIcon>
        <ActionIcon
          onClick={() => onDeleteNode(row)}
          size={'md'}
          variant={'default'}
        >
          <IconTrash size={16} />
        </ActionIcon>
      </Group>
    )
  }

  return (
    <Layout isLogged={isLogged}>
      <Box
        sx={{
          height: '100%',
          display: 'grid',
          gap: '1rem',
          gridTemplateRows: 'auto repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: '2fr 1fr',
        }}
      >
        <BoxCard
          title={'Nodes'}
          sx={{
            width: '100%',
            height: '100%',
            gridRow: 'span 3',
          }}
        >
          <Table
            data={filteredNodes}
            columns={[
              { header: 'ID', key: 'id' },
              { header: 'Name', key: 'name' },
              { header: 'Parent', key: 'parentId' },
              {
                header: 'Actions',
                key: 'actions',
                // @ts-expect-error
                cell: tableActions,
              },
            ]}
          />
        </BoxCard>
        <FilterCard value={search} onChange={onSearch} />
        <CreateNodeCard
          onChange={onChangeCreateNode}
          name={createNode.name}
          parentId={createNode.parentId}
          onClick={onCreateNode}
        />
        <EditNodeCard
          onChange={onChangeEditNode}
          name={editNode?.name}
          parentId={editNode?.parentId}
          onClick={onEditNode}
        />
      </Box>
    </Layout>
  )
}

export { Home }
