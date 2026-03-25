import {useState} from 'react'
import './Update.css'
import {Breadcrumb} from 'react-aria-components'
import {Button} from '../components/Button.tsx'
import {Link} from '../components/Link.tsx'
import {Select, SelectItem} from '../components/Select.tsx'
import {Tab, TabList, Tabs} from '../components/Tabs.tsx'
import {TextField} from '../components/TextField.tsx'
import {Breadcrumbs} from '../todo/Breadcrumbs.tsx'
import {IcRoundAdd} from './icons/IcRoundAdd.tsx'
import {IcRoundArrowBack} from './icons/IcRoundArrowBack.tsx'
import {IcRoundArrowForward} from './icons/IcRoundArrowForward.tsx'
import {IcRoundClose} from './icons/IcRoundClose.tsx'
import {IcRoundKeyboardArrowDown} from './icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardTab} from './icons/IcRoundKeyboardTab.tsx'
import {IcRoundLaunch} from './icons/IcRoundLaunch.tsx'
import {IcRoundRefresh} from './icons/IcRoundRefresh.tsx'
import {IcRoundRemoveRedEye} from './icons/IcRoundRemoveRedEye.tsx'
import {IcRoundSearch} from './icons/IcRoundSearch.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'
import {IcRoundTextFields} from './icons/IcRoundTextFields.tsx'
import {IcRoundTextSnippet} from './icons/IcRoundTextSnippet.tsx'
import {IcRoundUnfoldMore} from './icons/IcRoundUnfoldMore.tsx'

export function Home() {
  const [isRightSideBarCollapse, setIsRightSidebarCollapsed] = useState(false)
  return (
    <div className="alinea-view">
      <aside className="sidebar-left">
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
      <main className="main">
        <div className="bar">
          <h1 className="big-title">
            Flanders AI Conference @Wintercircus Gent MEI 2025
          </h1>
          <div className="buttons">
            <Button appearance="solid">Publish</Button>
            <Button appearance="solid" intent="secondary">
              Save
            </Button>
          </div>
        </div>
        <div className="bar topbar-published">
          <Breadcrumbs>
            <Breadcrumb>
              <Link>Pages</Link>
            </Breadcrumb>
            <Breadcrumb>
              <Link>Parent</Link>
            </Breadcrumb>
          </Breadcrumbs>
          <div className="dividerlabel">
            <IcRoundRemoveRedEye />
            <p className="sublabel">Published</p>
          </div>
        </div>
        <section className="content">
          <div className="contentbox">
            <Tabs variant="line" className="tabs">
              <TabList>
                <Tab id="document">Document</Tab>
                <Tab id="metadata">Metadata</Tab>
              </TabList>
            </Tabs>
            <div className="boxcontent">
              <div className="inputbox">
                <TextField label="Title" placeholder="Placeholder title" />
                <TextField label="Path" placeholder="Placeholder path" />
              </div>
              <div className="contentbox">
                <Tabs variant="line" className="tabs">
                  <TabList>
                    <Tab id="blocks">Blocks</Tab>
                    <Tab id="depricated">Depricated</Tab>
                  </TabList>
                </Tabs>
                <div className="divider">
                  <h3 className="label">Blocks</h3>
                  <div className="controls">
                    <h3 className="label">Fold</h3>
                    <IcRoundUnfoldMore />
                  </div>
                </div>
                <div className="divider">
                  <div className="dividerlabel">
                    <IcRoundTextFields />
                    <h3 className="label">Text</h3>
                  </div>
                  <div className="controls">
                    <Button size="icon" appearance="plain" intent="secondary">
                      <IcRoundSettings />
                    </Button>
                    <Button size="icon" appearance="plain" intent="secondary">
                      <IcRoundClose />
                    </Button>
                  </div>
                </div>
                <div className="boxcontent">
                  <div className="inputbox">
                    <TextField label="Title" placeholder="Placeholder title" />
                  </div>
                  <div className="contentbox">
                    <div className="boxheader">
                      <h3 className="label">Items</h3>
                      <div className="controls">
                        <h3 className="label">Fold</h3>
                        <IcRoundUnfoldMore />
                      </div>
                    </div>
                    <div className="divider">
                      <div className="dividerlabel">
                        <IcRoundTextSnippet />
                        <h3 className="label">Item</h3>
                      </div>
                      <div className="controls">
                        <Button
                          size="icon"
                          appearance="plain"
                          intent="secondary"
                        >
                          <IcRoundSettings />
                        </Button>
                        <Button
                          size="icon"
                          appearance="plain"
                          intent="secondary"
                        >
                          <IcRoundClose />
                        </Button>
                      </div>
                    </div>
                    <div className="boxcontent">
                      <TextField label="Text" placeholder="Placeholder text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {!isRightSideBarCollapse}
      <aside className="sidebar-right">
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
    </div>
  )
}
export default {title: 'Stories / Update'}
