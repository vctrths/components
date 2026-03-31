import {Button as RacButton} from 'react-aria-components'
import {IcRoundAdd} from '../stories/icons/IcRoundAdd.tsx'
import {IcRoundArrowBack} from '../stories/icons/IcRoundArrowBack.tsx'
import {IcRoundKeyboardArrowDown} from '../stories/icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundMoreVert} from '../stories/icons/IcRoundMoreVert.tsx'
import {IcRoundSearch} from '../stories/icons/IcRoundSearch.tsx'
import {Button} from './Button.tsx'
import {Rail, RailBody, RailFooter, RailHeader} from './Rail.tsx'

import './LeftBar.css'
import {IcRoundAccountCircle} from '../stories/icons/IcRoundAccountCircle.tsx'
import {Menu, MenuItem} from './Menu.tsx'

function Tempaicon() {
  return (
    <div className="tempaicon">
      <h3>a</h3>
    </div>
  )
}

export function LeftBar() {
  return (
    <Rail className="alinea-rac-LeftBar">
      <RailHeader className="alinea-rac-LeftBarHeader">
        <Tempaicon />
        <Menu
          label={
            <RacButton className="menuselect">
              Workspace <IcRoundKeyboardArrowDown />
            </RacButton>
          }
          className="selectwidth"
        >
          <MenuItem id={1} key="NL">
            NL
          </MenuItem>
          <MenuItem id={2} key="FR">
            FR
          </MenuItem>
          <MenuItem id={3} key="EN">
            EN
          </MenuItem>
        </Menu>
        <Menu
          label={
            <RacButton className="menuselect">
              NL <IcRoundKeyboardArrowDown />
            </RacButton>
          }
          className="selectwidth"
        >
          <MenuItem id="media" key="media">
            NL
          </MenuItem>
          <MenuItem id="media" key="media">
            FR
          </MenuItem>
          <MenuItem id="media" key="media">
            EN
          </MenuItem>
        </Menu>

        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundSearch className="medIcon" />
        </Button>
      </RailHeader>

      <RailHeader className="alinea-rac-LeftBarHeader">
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundArrowBack className="medIcon" />
        </Button>
        <Menu
          label={
            <RacButton className="menuselect">
              Root <IcRoundKeyboardArrowDown />
            </RacButton>
          }
          className="selectwidth"
        >
          <MenuItem id="pages" key="pages">
            Pages
          </MenuItem>
          <MenuItem id="workspace" key="workspace">
            Workspace
          </MenuItem>
          <MenuItem id="media" key="media">
            Media
          </MenuItem>
        </Menu>
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundAdd className="medIcon" />
        </Button>
      </RailHeader>

      <RailBody className="alinea-rac-LeftBarBody">
        <Button appearance="link" intent="secondary">
          Home
        </Button>
        <Button appearance="link" intent="secondary">
          About us
        </Button>
        <Button appearance="link" intent="secondary">
          Services
          <IcRoundKeyboardArrowDown data-slot="icon" />
        </Button>
        <Button appearance="link" intent="secondary">
          Our team
          <IcRoundKeyboardArrowDown data-slot="icon" />
        </Button>
      </RailBody>

      <RailFooter className="alinea-rac-LeftBarFooter">
        <div className="alinea-rac-LeftBarFooter-profile">
          <IcRoundAccountCircle />
          <p className="label">John Doe</p>
        </div>
        <Button
          size="icon"
          appearance="outline"
          intent="secondary"
          className="pfp"
        >
          <IcRoundMoreVert />
        </Button>
      </RailFooter>
    </Rail>
  )
}
