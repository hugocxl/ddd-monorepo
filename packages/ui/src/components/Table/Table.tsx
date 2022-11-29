import {
  Box,
  Table as MnTable,
  TableProps as MnTableProps,
} from '@mantine/core'

export interface TableProps extends MnTableProps {
  data: any[] | undefined
  columns: {
    header: string
    key: string
    cell?: (data: unknown) => Element
  }[]
}

export function Table({ data = [], columns = [], ...rest }: TableProps) {
  const headers = columns.map((column) => (
    <Box
      component='th'
      sx={{
        position: 'sticky',
        top: 0,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        width: '100%',
      }}
      key={column.header}
    >
      {column.header}
    </Box>
  ))
  const rows = data.map((item, i) => {
    return (
      <Box
        component='tr'
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          width: '100%',
        }}
        key={JSON.stringify(item)}
      >
        {columns.map((column) => (
          <td key={column.key + i}>
            {column?.cell ? column.cell(item) : item[column.key]}
          </td>
        ))}
      </Box>
    )
  })

  return (
    <MnTable
      data-test={'table'}
      h={'100%'}
      mb={0}
      withColumnBorders
      striped
      highlightOnHover
    >
      {/* <Box component='thead' sx={{ display: 'block' }}>
        {headers}
      </Box> */}

      <Box
        component={'tbody'}
        sx={{
          display: 'block',
          overflow: 'auto',
          height: '100%',
          width: '100%',
        }}
      >
        {rows}
      </Box>
    </MnTable>
  )
}
