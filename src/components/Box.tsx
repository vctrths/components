import clsx from 'clsx'
import type {ComponentPropsWithoutRef, ReactNode} from 'react'

import './Box.css'

export interface BaseBoxProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}

export function Box({children, className, ...props}: BaseBoxProps) {
  return (
    <div {...props} className={clsx('alinea-rac-Box', className)}>
      {children}
    </div>
  )
}

export interface BoxRowProps extends BaseBoxProps {
  children?: ReactNode
  position?: 'start' | 'middle' | 'end'
  inline?: boolean
}

export function BoxRow({children, className, ...props}: BoxRowProps) {
  return (
    <div {...props} className={clsx('alinea-rac-BoxRow', className)}>
      {children}
    </div>
  )
}

export function BoxContent({children, className, ...props}: BaseBoxProps) {
  return (
    <div {...props} className={clsx('alinea-rac-BoxContent', className)}>
      {children}
    </div>
  )
}

export function BoxHeader({children}: BaseBoxProps) {
  return <div className="alinea-rac-BoxHeader">{children}</div>
}
