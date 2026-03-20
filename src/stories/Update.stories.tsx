import {useState} from 'react'
import './Update.css'
import {Button} from '../components/Button.tsx'
import {Select, SelectItem} from '../components/Select.tsx'
import {Tab, TabList, Tabs} from '../components/Tabs.tsx'
import {IcRoundKeyboardTab} from './icons/IcRoundKeyboardTab.tsx'
import {IcRoundSearch} from './icons/IcRoundSearch.tsx'

export function Home() {
  const [isRightSideBarCollapse, setIsRightSidebarCollapsed] = useState(false)
  return (
    <div className="alinea-view">
      <aside className="sidebar-left">
        <div className="bar">
          <h3>Alinea</h3>
          <Button size="icon" appearance="outline" intent="secondary">
            <IcRoundSearch className="medIcon" />
          </Button>
        </div>
        <div className="bar">
          <Select defaultSelectedKey="NL">
            <SelectItem key="NL">NL</SelectItem>
            <SelectItem key="FR">FR</SelectItem>
            <SelectItem key="EN">EN</SelectItem>
          </Select>
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
        <div className="bar">
          <p className="sublabel">Parent / Page</p>
          <p className="sublabel">draft</p>
        </div>
        <section className="content">
          <p>test</p>
        </section>
      </main>
      {!isRightSideBarCollapse}
      <aside className="sidebar-right">
        <div className="bar">
          <Button size="icon" appearance="outline" intent="secondary">
            <IcRoundKeyboardTab className="medIcon" />
          </Button>
          <Tabs variant="enclosed" className="tabs">
            <TabList>
              <Tab id="history">History</Tab>
              <Tab id="preview">Preview</Tab>
            </TabList>
          </Tabs>
        </div>
      </aside>
    </div>
  )
}
export default {title: 'Stories / Update'}
