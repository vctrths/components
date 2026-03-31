import clsx from 'clsx'
import type {ComponentPropsWithoutRef} from 'react'

import {IcRoundAdd} from '../stories/icons/IcRoundAdd.tsx'
import {IcRoundArrowBack} from '../stories/icons/IcRoundArrowBack.tsx'
import {IcRoundKeyboardArrowDown} from '../stories/icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundSearch} from '../stories/icons/IcRoundSearch.tsx'
import {Button} from './Button.tsx'
import {Select, SelectItem} from './Select.tsx'

import './LeftBar.css'

interface LeftBarProps extends ComponentPropsWithoutRef<'aside'> {}

export function LeftBar({className, ...props}: LeftBarProps) {
  return (
    <aside {...props} className={clsx('sidebar-left', className)}>
      <div className="bar">
        <h3>Alinea</h3>
        <div className="bar">
          <Select>
            <SelectItem key="NL">NL</SelectItem>
            <SelectItem key="FR">FR</SelectItem>
            <SelectItem key="EN">EN</SelectItem>
          </Select>
        </div>
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundSearch className="medIcon" />
        </Button>
      </div>
      <div className="bar">
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundArrowBack className="medIcon" />
        </Button>
        <Select>
          <SelectItem key="pages">Pages</SelectItem>
          <SelectItem key="'workspace'">Workspace</SelectItem>
          <SelectItem key="media">Media</SelectItem>
        </Select>
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundAdd className="medIcon" />
        </Button>
      </div>
      <div className="links">
        <Button appearance="link" intent="secondary">
          Home
        </Button>
        <Button appearance="link" intent="secondary">
          About us
        </Button>
        <Button appearance="link" intent="secondary">
          Services
          <span data-slot="trailing">
            <IcRoundKeyboardArrowDown data-slot="icon" />
          </span>
        </Button>
        <Button appearance="link" intent="secondary">
          Our team
          <span data-slot="trailing">
            <IcRoundKeyboardArrowDown data-slot="icon" />
          </span>
        </Button>
      </div>
    </aside>
  )
}
