import type {ReactNode} from 'react'

import './BoxRow.css'

interface BoxRowProps {
  label: string
  icon?: ReactNode
  children: ReactNode
}

export function BoxRow({label, icon, children}: BoxRowProps) {
  return (
    <div className="divider">
      {icon ? (
        <div className="dividerlabel">
          {icon}
          <h3 className="label">{label}</h3>
        </div>
      ) : (
        <h3 className="label">{label}</h3>
      )}
      <div className="controls">{children}</div>
    </div>
  )
}
