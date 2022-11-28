import { Table as MnTable } from '@mantine/core'

export interface TableProps {
  onClickRow?: (row: any) => void
  data: any[] | undefined
  columns: {
    header: string
    key: string
  }[]
}

export function Table({ data = [], columns = [], onClickRow }: TableProps) {
  const headers = columns.map((column) => (
    <th key={column.header}>{column.header}</th>
  ))
  const rows = data.map((item) => (
    <tr
      key={JSON.stringify(item)}
      onClick={() => {
        onClickRow(item)
      }}
    >
      {columns.map((column) => (
        <td>{item[column.key]}</td>
      ))}
    </tr>
  ))

  return (
    <MnTable>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </MnTable>
  )
}
