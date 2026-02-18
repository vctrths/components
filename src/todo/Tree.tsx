import clsx from 'clsx'
import {
  Tree as AriaTree,
  TreeItem as AriaTreeItem,
  TreeItemContent as AriaTreeItemContent,
  type TreeItemContentProps as AriaTreeItemContentProps,
  type TreeItemProps as AriaTreeItemProps,
  Button,
  type TreeItemContentRenderProps,
  type TreeProps
} from 'react-aria-components'
import {Checkbox} from '../components/Checkbox.tsx'
import {Icon, type IconProps} from '../components/Icon.tsx'
import './Tree.css'
import type {ReactNode} from 'react'

export function Tree<T extends object>(props: TreeProps<T>) {
  const {className, ...rest} = props
  return (
    <AriaTree
      {...rest}
      className={renderProps =>
        clsx(
          'alinea-rac-Tree',
          typeof className === 'function' ? className(renderProps) : className
        )
      }
    />
  )
}

export interface TreeItemContentProps2
  extends Omit<AriaTreeItemContentProps, 'children'> {
  children?: ReactNode
  icon?: IconProps['icon']
  suffix?: ReactNode
}

export function TreeItemContent({
  icon,
  suffix,
  children
}: TreeItemContentProps2) {
  return (
    <AriaTreeItemContent>
      {({
        selectionBehavior,
        selectionMode,
        allowsDragging
      }: TreeItemContentRenderProps) => (
        <>
          {allowsDragging && <Button slot="drag">≡</Button>}
          {selectionBehavior === 'toggle' && selectionMode !== 'none' && (
            <Checkbox slot="selection" />
          )}
          <Button slot="chevron">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 17l5-5-5-5v10z" />
            </svg>
          </Button>
          {icon && (
            <span data-slot="icon">
              <Icon icon={icon} />
            </span>
          )}
          <span data-slot="label">{children}</span>
          {suffix && <span data-slot="suffix">{suffix}</span>}
        </>
      )}
    </AriaTreeItemContent>
  )
}

export interface TreeItemProps extends Partial<AriaTreeItemProps> {
  title: string
  icon?: IconProps['icon']
  suffix?: ReactNode
}

export function TreeItem({
  title,
  icon,
  suffix,
  children,
  className,
  ...rest
}: TreeItemProps) {
  return (
    <AriaTreeItem
      textValue={title}
      {...rest}
      className={renderProps =>
        clsx(
          'alinea-rac-TreeItem',
          typeof className === 'function' ? className(renderProps) : className
        )
      }
    >
      <TreeItemContent icon={icon} suffix={suffix}>
        {title}
      </TreeItemContent>
      {children}
    </AriaTreeItem>
  )
}
