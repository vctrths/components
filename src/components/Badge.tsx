import clsx from 'clsx'
import type {ComponentPropsWithoutRef, ReactNode} from 'react'

import './Badge.css'

interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  label: string
  icon: ReactNode
  iconpos?: 'left' | 'right'
  appearance?: 'background' | 'outline' | 'plain' | 'default'
  status: 'success' | 'warning' | 'neutral' | 'danger'
}

export function Badge({
  label,
  icon,
  status,
  iconpos = 'left',
  appearance = 'default',
  ...props
}: BadgeProps) {
  return (
    <div
      data-status={status}
      data-appearance={appearance}
      className={clsx('alinea-rac-Badge', props.className)}
    >
      {iconpos === 'left' && icon}
      <p className="sublabel">{label}</p>
      {iconpos === 'right' && icon}
    </div>
  )
}
