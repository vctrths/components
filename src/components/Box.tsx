import clsx from 'clsx'
import type {ComponentPropsWithoutRef, ReactNode} from 'react'

import './Box.css'

interface BoxProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}

export function Box({children, className, ...props}: BoxProps) {
  return (
    <div {...props} className={clsx('contentbox', className)}>
      {children}
    </div>
  )
}
