import clsx from 'clsx'
import type {HTMLProps} from 'react'
import './Rail.css'

export interface RailProps extends HTMLProps<HTMLDivElement> {
  main?: boolean
}

export function Rail({main, className, ...props}: RailProps) {
  return (
    <div
      {...props}
      className={clsx('alinea-rac-Rail', main && 'is-main', className)}
    />
  )
}

export interface RailHeaderProps extends HTMLProps<HTMLElement> {}

export function RailHeader({className, ...props}: RailHeaderProps) {
  return (
    <header {...props} className={clsx('alinea-rac-RailHeader', className)} />
  )
}

export interface RailBodyProps extends HTMLProps<HTMLDivElement> {}

export function RailBody({className, ...props}: RailBodyProps) {
  return <div {...props} className={clsx('alinea-rac-RailBody', className)} />
}

export interface RailFooterProps extends HTMLProps<HTMLElement> {}

export function RailFooter({className, ...props}: RailFooterProps) {
  return (
    <footer {...props} className={clsx('alinea-rac-RailFooter', className)} />
  )
}
