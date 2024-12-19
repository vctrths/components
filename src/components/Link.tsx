import {
  Link as RACLink,
  type LinkProps as RACLinkProps
} from 'react-aria-components'
import './Link.css'
import clsx from 'clsx'

export interface LinkProps extends RACLinkProps {
  variant?: 'plain' | 'underline' | 'inherit'
}

export function Link({variant, ...props}: LinkProps) {
  return (
    <RACLink
      data-variant={variant}
      {...props}
      className={clsx('alinea-rac-Link', props.className)}
    />
  )
}
