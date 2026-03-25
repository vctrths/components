import clsx from 'clsx'
import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps
} from 'react-aria-components'

import './Button.css'

export interface ButtonProps extends ButtonPrimitiveProps {
  appearance?: 'solid' | 'outline' | 'plain' | 'active' | 'link'
  intent?: 'primary' | 'secondary' | 'danger' | 'warning'
  size?: 'small' | 'medium' | 'large' | 'square-petite' | 'icon'
  isActive?: boolean
}

export function Button({
  intent = 'primary',
  size = 'medium',
  appearance = 'solid',
  isActive = false,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-intent={intent}
      data-size={size}
      data-appearance={appearance}
      data-active={isActive || undefined}
      {...props}
      className={clsx('alinea-rac-Button', props.className)}
    />
  )
}
