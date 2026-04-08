import {Breadcrumb} from 'react-aria-components'
import {Breadcrumbs} from '../todo/Breadcrumbs.tsx'
import {Badge} from './Badge.tsx'
import {Link} from './Link.tsx'
import './DetailsBar.css'
import {IcRoundVisibility} from '../stories/icons/IcRoundVisibility.tsx'

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
        icon={<IcRoundVisibility />}
        label="Published"
        status="success"
        appearance="plain"
      />
    </div>
  )
}
