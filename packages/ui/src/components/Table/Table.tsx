import { Table as MnTable } from '@mantine/core'

export interface TableProps {
  data: any[] | undefined
  columns: {
    header: string
    key: string
  }[]
}

export function Table({ data = [], columns = [] }: TableProps) {
  const headers = columns.map((column) => <th>{column.header}</th>)
  const rows = data.map((item) => (
    <tr key={item.name}>
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
