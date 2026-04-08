import {Breadcrumb} from 'react-aria-components'
import {IcRoundRemoveRedEye} from '../stories/icons/IcRoundRemoveRedEye.tsx'
import {Breadcrumbs} from '../todo/Breadcrumbs.tsx'
import {Badge} from './Badge.tsx'
import {Link} from './Link.tsx'
import './DetailsBar.css'

interface DetailsBarProps {
  status: 'published' | 'draft' | 'archived'
}

export function DetailsBar({status}: DetailsBarProps) {
  return (
    <div className="alinea-rac-DetailsBar" data-status={status}>
      <Breadcrumbs>
        <Breadcrumb>
          <Link>Pages</Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link>Parent</Link>
        </Breadcrumb>
      </Breadcrumbs>
      <Badge
        icon={<IcRoundRemoveRedEye />}
        label="Published"
        status="success"
        appearence="plain"
      />
    </div>
  )
}
