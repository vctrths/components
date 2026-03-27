import clsx from 'clsx'
import type {ComponentPropsWithoutRef, ReactNode} from 'react'

import './Box.css'

type BoxCompType =
  | 'alinea-rac-Box'
  | 'alinea-rac-BoxRow'
  | 'alinea-rac-BoxContent'

interface BoxProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
  position?: 'start' | 'middle' | 'end'
}
interface BoxCompProps extends BoxProps {
  type: BoxCompType
}

function BoxComp({
  type,
  position,
  children,
  className,
  ...props
}: BoxCompProps) {
  return (
    <div
      {...props}
      className={clsx(
        type,
        position && `alinea-rac-BoxRow-${position}`,
        className
      )}
    >
      {children}
    </div>
  )
}

function createBox(type: BoxCompType) {
  function BoxVariant(props: BoxProps) {
    return <BoxComp type={type} {...props} />
  }
  return BoxVariant
}

export const Box = createBox('alinea-rac-Box')
export const BoxRow = createBox('alinea-rac-BoxRow')
export const BoxContent = createBox('alinea-rac-BoxContent')
