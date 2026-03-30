import clsx from 'clsx'
import {Breadcrumb} from 'react-aria-components'
import {IcRoundRemoveRedEye} from '../stories/icons/IcRoundRemoveRedEye.tsx'
import {Breadcrumbs} from '../todo/Breadcrumbs.tsx'
import {Badge} from './Badge.tsx'
import {Link} from './Link.tsx'
import './StatusBar.css'

interface StatusbarProps {
  status: 'published' | 'draft' | 'archived'
}

export function Statusbar({status}: StatusbarProps) {
  return (
    <div
      className={clsx('alinea-rac-Statusbar', `alinea-rac-Statusbar-${status}`)}
    >
      <Breadcrumbs>
        <Breadcrumb>
          <Link>Pages</Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link>Parent</Link>
        </Breadcrumb>
      </Breadcrumbs>
      {status === 'published' && (
        <Badge
          icon={<IcRoundRemoveRedEye />}
          label="Published"
          status="succes"
        />
      )}
      {status === 'draft' && (
        <Badge
          icon={<IcRoundRemoveRedEye />}
          label="Published"
          status="warning"
        />
      )}
      {status === 'archived' && (
        <Badge
          icon={<IcRoundRemoveRedEye />}
          label="Published"
          status="succes"
        />
      )}
    </div>
  )
}
