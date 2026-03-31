import type {ComponentPropsWithoutRef} from 'react'
import {IcRoundArrowBack} from '../stories/icons/IcRoundArrowBack.tsx'
import {IcRoundArrowForward} from '../stories/icons/IcRoundArrowForward.tsx'
import {IcRoundKeyboardTab} from '../stories/icons/IcRoundKeyboardTab.tsx'
import {IcRoundLaunch} from '../stories/icons/IcRoundLaunch.tsx'
import {IcRoundRefresh} from '../stories/icons/IcRoundRefresh.tsx'
import {Button} from './Button.tsx'
import {Rail, RailBody, RailHeader} from './Rail.tsx'
import {Tab, TabList, Tabs} from './Tabs.tsx'

import './RightBar.css'
import {IcRoundHistory} from '../stories/icons/IcRoundHistory.tsx'
import {IcRoundRemoveRedEye} from '../stories/icons/IcRoundRemoveRedEye.tsx'

interface RightBarProps extends ComponentPropsWithoutRef<'aside'> {}

function BarToggle() {
  return (
    <Tabs variant="subtle" className="tabs">
      <TabList>
        <Tab id="history">
          <IcRoundHistory />
          History
        </Tab>
        <Tab id="preview">
          <IcRoundRemoveRedEye />
          Preview
        </Tab>
      </TabList>
    </Tabs>
  )
}

export function RightBar({className, ...props}: RightBarProps) {
  return (
    <Rail className="alinea-rac-RightBar">
      <RailHeader className="alinea-rac-RightBarPadding alinea-rac-RightBarTabControls">
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundKeyboardTab className="medIcon" />
        </Button>
        <BarToggle />
      </RailHeader>
      <RailHeader className="alinea-rac-RightBarPadding">
        <div className="alinea-rac-RightBarPreviewControls">
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
      </RailHeader>
      <RailBody />
    </Rail>
  )
}
