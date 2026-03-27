import clsx from 'clsx'
import type {ComponentPropsWithoutRef, ReactNode} from 'react'

import './BoxContent.css'

interface BoxContentProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}

export function BoxContent({children, className, ...props}: BoxContentProps) {
  return (
    <div {...props} className={clsx('boxcontent', className)}>
      {children}
    </div>
  )
}
