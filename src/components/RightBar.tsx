import clsx from 'clsx'
import type {ComponentPropsWithoutRef} from 'react'

import {IcRoundArrowBack} from '../stories/icons/IcRoundArrowBack.tsx'
import {IcRoundArrowForward} from '../stories/icons/IcRoundArrowForward.tsx'
import {IcRoundKeyboardTab} from '../stories/icons/IcRoundKeyboardTab.tsx'
import {IcRoundLaunch} from '../stories/icons/IcRoundLaunch.tsx'
import {IcRoundRefresh} from '../stories/icons/IcRoundRefresh.tsx'
import {Button} from './Button.tsx'
import {Tab, TabList, Tabs} from './Tabs.tsx'

import './RightBar.css'

interface RightBarProps extends ComponentPropsWithoutRef<'aside'> {}

export function RightBar({className, ...props}: RightBarProps) {
  return (
    <aside {...props} className={clsx('sidebar-right', className)}>
      <div className="bar">
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundKeyboardTab className="medIcon" />
        </Button>
        <Tabs variant="subtle" className="tabs">
          <TabList>
            <Tab id="history">History</Tab>
            <Tab id="preview">Preview</Tab>
          </TabList>
        </Tabs>
      </div>
      <div className="bar">
        <div className="previewcontrols">
          <Button size="icon" appearance="outline" intent="secondary">
            <IcRoundArrowBack />
          </Button>
          <Button size="icon" appearance="outline" intent="secondary">
            <IcRoundArrowForward />
          </Button>
          <Button size="icon" appearance="outline" intent="secondary">
            <IcRoundRefresh />
          </Button>
        </div>
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundLaunch />
        </Button>
      </div>
    </aside>
  )
}
