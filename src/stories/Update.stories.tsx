import './Update.css'
import type {ReactNode} from 'react'
import {Box, BoxContent, BoxRow} from '../components/Box.tsx'
import {Button} from '../components/Button.tsx'
import {LeftBar} from '../components/LeftBar.tsx'
import {RightBar} from '../components/RightBar.tsx'
import {Statusbar} from '../components/StatusBar.tsx'
import {Tab, TabList, Tabs} from '../components/Tabs.tsx'
import {TextField} from '../components/TextField.tsx'
import {IcRoundAdd} from './icons/IcRoundAdd.tsx'
import {IcRoundClose} from './icons/IcRoundClose.tsx'
import {IcRoundEdit} from './icons/IcRoundEdit.tsx'
import {IcRoundLaunch} from './icons/IcRoundLaunch.tsx'
import {IcRoundLink} from './icons/IcRoundLink.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'
import {IcRoundTextSnippet} from './icons/IcRoundTextSnippet.tsx'
import {IcRoundUnfoldMore} from './icons/IcRoundUnfoldMore.tsx'

function FoldControl() {
  return (
    <Button className="boxrow-fold" appearance="plain">
      <h3 className="label">Fold</h3>
      <IcRoundUnfoldMore />
    </Button>
  )
}

function Settings() {
  return (
    <div>
      <Button size="icon" appearance="outline" intent="secondary">
        <IcRoundSettings />
      </Button>
      <Button size="icon" appearance="outline" intent="secondary">
        <IcRoundClose />
      </Button>
    </div>
  )
}

interface RowProps {
  label?: string
  icon?: ReactNode
  variant: 'fold' | 'settings'
}

function RowComp({label, icon, variant}: RowProps) {
  const Action = variant === 'fold' ? FoldControl : Settings

  return (
    <BoxRow>
      <div className="boxrow-label">
        {icon}
        <h3 className="label">{label}</h3>
      </div>
      <Action />
    </BoxRow>
  )
}

function Bar() {
  return (
    <>
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
      <Statusbar status={'published'} />
    </>
  )
}

function TextBlock() {
  return (
    <>
      <RowComp variant="settings" label="Text" />
      <BoxContent>
        <TextField label="Title" placeholder="Placeholder title" />
        <Box>
          <RowComp variant="fold" label="Item" icon={<IcRoundTextSnippet />} />
          <BoxContent>
            <TextField label="Text" placeholder="Placeholder text" />
          </BoxContent>
        </Box>
      </BoxContent>
    </>
  )
}

function LinkBlock() {
  return (
    <>
      <RowComp variant="settings" label="Link" />
      <BoxContent>
        <Box>
          <BoxRow position="middle">
            <IcRoundAdd />
            <h3 className="sublabel">page link</h3>
          </BoxRow>
          <BoxRow>
            <div className="boxrow-label">
              <IcRoundLink />
              <h3 className="sublabel">Content page</h3>
            </div>
            <div className="boxrow-label">
              <Button size="icon" appearance="outline" intent="secondary">
                <IcRoundLaunch />
              </Button>
              <Button size="icon" appearance="outline" intent="secondary">
                <IcRoundEdit />
              </Button>
              <Button size="icon" appearance="outline" intent="secondary">
                <IcRoundClose />
              </Button>
            </div>
          </BoxRow>
        </Box>
      </BoxContent>
    </>
  )
}

export function Home() {
  return (
    <div className="alinea-view">
      <LeftBar />
      <main className="main">
        <Bar />
        <section className="content">
          <Box>
            <Tabs variant="line" className="tabs">
              <TabList>
                <Tab id="document">Document</Tab>
                <Tab id="metadata">Metadata</Tab>
              </TabList>
            </Tabs>
            <BoxContent>
              <div className="inputbox">
                <TextField label="Title" value="Contentpage" isRequired />
                <TextField label="Path" value="contentpage" isRequired />
              </div>
              <Box>
                <Tabs variant="line" className="tabs">
                  <TabList>
                    <Tab id="blocks">Blocks</Tab>
                    <Tab id="depricated">Deprecated</Tab>
                  </TabList>
                </Tabs>
                <RowComp variant="fold" label="Blocks" />
                <TextBlock />
                <TextBlock />
                <LinkBlock />
              </Box>
            </BoxContent>
          </Box>
        </section>
      </main>
      <RightBar />
    </div>
  )
}
export default {title: 'Stories / Update'}
