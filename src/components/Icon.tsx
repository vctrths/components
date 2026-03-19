import clsx from 'clsx'
import {
  type ComponentType,
  ReactElement,
  type SVGProps,
  cloneElement,
  isValidElement
} from 'react'
import './Icon.css'

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: ComponentType | ReactElement
  'aria-label'?: string
  'aria-hidden'?: boolean | 'false' | 'true'
}

export function Icon({
  icon: IconView,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) {
  const view = typeof IconView === 'function' ? <IconView /> : IconView
  if (!isValidElement<SVGProps<SVGSVGElement>>(view)) return null
  return cloneElement(view, {
    focusable: 'false',
    'aria-label': ariaLabel,
    'aria-hidden': ariaLabel ? ariaHidden || undefined : true,
    role: 'img',
    className: clsx('alinea-rac-Icon', props.className)
  })
}
