import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader
} from '../src/components/Table.tsx'

export const Example = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 32
    }}
  >
    <Table aria-label="Table" striped>
      {columns?.length > 0 && (
        <TableHeader>
          {columns.map(column => (
            <Column isRowHeader key={column.id}>
              {column.title}
            </Column>
          ))}
        </TableHeader>
      )}
      <TableBody renderEmptyState={() => <p>No results found.</p>}>
        {items?.length > 0 &&
          items.map(item => (
            <Row key={item.id}>
              <Cell>{item.name}</Cell>
              <Cell>{item.type}</Cell>
              <Cell>{item.date_modified}</Cell>
            </Row>
          ))}
      </TableBody>
    </Table>
    <Table aria-label="Table" style={{width: '100%'}}>
      <TableHeader>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
        <Column>Date Modified</Column>
      </TableHeader>
      <TableBody renderEmptyState={() => <p>No results found.</p>}>
        {items?.length > 0 &&
          items.map(item => (
            <Row key={item.id}>
              <Cell>{item.name}</Cell>
              <Cell>{item.type}</Cell>
              <Cell>{item.date_modified}</Cell>
            </Row>
          ))}
      </TableBody>
    </Table>
  </div>
)

const columns = [
  {id: 'name', title: 'Name', allowSorting: true},
  {id: 'type', title: 'Type', allowSorting: true},
  {id: 'date_modified', title: 'Date Modified', allowSorting: true}
]

const items = [
  {id: 1, name: 'Games', type: 'File folder', date_modified: '6/7/2020'},
  {
    id: 2,
    name: 'Program Files',
    type: 'File folder',
    date_modified: '4/7/2021'
  },
  {id: 3, name: 'bootmgr', type: 'System file', date_modified: '11/20/2010'}
]
