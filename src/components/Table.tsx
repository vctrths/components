import clsx from 'clsx'
import {
  Cell as CellPrimitive,
  type CellProps,
  Collection,
  Column as ColumnPrimitive,
  type ColumnProps,
  Row as RowPrimitive,
  type RowProps,
  TableBody as TableBodyPrimitive,
  type TableBodyProps,
  TableHeader as TableHeaderPrimitive,
  type TableHeaderProps,
  Table as TablePrimitive,
  type TableProps,
  useTableOptions
} from 'react-aria-components'
import {Checkbox} from './Checkbox.tsx'
import './Table.css'
import {Button} from './Button.tsx'

export type {
  TableProps,
  ColumnProps,
  RowProps,
  CellProps,
  TableBodyProps
} from 'react-aria-components'

export function Table(
  props: TableProps & {
    striped?: boolean
  }
) {
  return (
    <TablePrimitive
      data-striped={props.striped}
      {...props}
      className={clsx('alinea-Table', props.className)}
    />
  )
}

export function Column(props: ColumnProps) {
  return (
    <ColumnPrimitive
      {...props}
      className={clsx('alinea-Column', props.className)}
    >
      {({allowsSorting, sortDirection}) => (
        <>
          {props.children}
          {allowsSorting && (
            <span aria-hidden="true" className="alinea-Column-sortIndicator">
              {sortDirection === 'ascending' ? '▲' : '▼'}
            </span>
          )}
        </>
      )}
    </ColumnPrimitive>
  )
}

export function TableHeader<T extends object>({
  columns,
  children,
  ...props
}: TableHeaderProps<T>) {
  const {selectionBehavior, selectionMode, allowsDragging} = useTableOptions()

  return (
    <TableHeaderPrimitive
      className={clsx('alinea-TableHeader', props.className)}
    >
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <ColumnPrimitive className="alinea-Column" />}
      {selectionBehavior === 'toggle' && (
        <ColumnPrimitive className="alinea-Column">
          {selectionMode === 'multiple' && <Checkbox slot="selection" />}
        </ColumnPrimitive>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeaderPrimitive>
  )
}

export function Row<T extends object>({
  id,
  columns,
  children,
  ...props
}: RowProps<T>) {
  const {selectionBehavior, allowsDragging} = useTableOptions()

  return (
    <RowPrimitive
      id={id}
      {...props}
      className={clsx('alinea-Row', props.className)}
    >
      {allowsDragging && (
        <Cell className="alinea-Cell">
          <Button slot="drag">≡</Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell className="alinea-Cell">
          <Checkbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </RowPrimitive>
  )
}

export function Cell(props: CellProps) {
  return (
    <CellPrimitive
      {...props}
      className={clsx('alinea-Cell', props.className)}
    />
  )
}

export function TableBody<T extends object>(props: TableBodyProps<T>) {
  return (
    <TableBodyPrimitive<T>
      {...props}
      className={clsx('alinea-TableBody', props.className)}
    />
  )
}
