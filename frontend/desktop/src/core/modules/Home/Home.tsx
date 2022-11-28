import { NextPage } from 'next'
import { Nodes } from '@sygris/core'
import { SimpleGrid, Table, Title, useServer } from '@sygris/ui'

const Home: NextPage = () => {
  const { data, isLoading, error } = useServer<Nodes>('nodes.all')

  return (
    <SimpleGrid cols={1} sx={{ gridTemplateRows: 'auto 1fr' }}>
      <Title>Nodes</Title>
      <Table
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
