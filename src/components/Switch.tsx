import clsx from 'clsx'
import {
  Switch as AriaSwitch,
  type SwitchProps as AriaSwitchProps
} from 'react-aria-components'
import './Switch.css'

export interface SwitchProps extends Omit<AriaSwitchProps, 'children'> {
  children: React.ReactNode
}

export function Switch({children, ...props}: SwitchProps) {
  return (
    <AriaSwitch
      {...props}
      className={clsx('alinea-rac-Switch', props.className)}
    >
      <div className="alinea-rac-Switch-track" />
      {children}
    </AriaSwitch>
  )
}
