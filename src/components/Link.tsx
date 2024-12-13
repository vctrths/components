import {
  Link as RACLink,
  type LinkProps as RACLinkProps
} from 'react-aria-components'
import './Link.css'

export interface LinkProps extends RACLinkProps {
  variant?: 'plain' | 'underline' | 'inherit'
}

export function Link({variant, ...props}: LinkProps) {
  return <RACLink data-variant={variant} {...props} />
}
