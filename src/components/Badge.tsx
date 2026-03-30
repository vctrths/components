import clsx from 'clsx'
import type {ReactNode} from 'react'

import './Badge.css'

interface BadgeProps {
  label: string
  icon: ReactNode
  iconpos?: 'left' | 'right'
  status: 'succes' | 'warning' | 'neutral' | 'danger'
}

export function Badge({label, icon, status, iconpos = 'left'}: BadgeProps) {
  return (
    <div className={clsx('alinea-rac-Badge', `alinea-rac-Badge-${status}`)}>
      {iconpos === 'left' && icon}
      <p className="sublabel">{label}</p>
      {iconpos === 'right' && icon}
    </div>
  )
}
