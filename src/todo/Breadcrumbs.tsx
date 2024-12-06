import {
  type BreadcrumbsProps,
  Breadcrumbs as RACBreadcrumbs
} from 'react-aria-components'
import './Breadcrumbs.css'

export function Breadcrumbs<T extends object>(props: BreadcrumbsProps<T>) {
  return <RACBreadcrumbs {...props} />
}
