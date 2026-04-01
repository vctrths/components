import './Update.css'
import {Allotment} from 'allotment'
import type {ReactNode} from 'react'
import {
  Box,
  BoxContent,
  BoxHeader,
  BoxRow,
  type BoxRowProps
} from '../components/Box.tsx'
import {Button} from '../components/Button.tsx'
import {LeftBar} from '../components/LeftBar.tsx'
import {Rail, RailBody, RailHeader} from '../components/Rail.tsx'
import {RightBar} from '../components/RightBar.tsx'
import {Statusbar} from '../components/StatusBar.tsx'
import {Tab, TabList, Tabs} from '../components/Tabs.tsx'
import {TextField} from '../components/TextField.tsx'
import {IcRoundClose} from './icons/IcRoundClose.tsx'
import {IcRoundEdit} from './icons/IcRoundEdit.tsx'
import {IcRoundLaunch} from './icons/IcRoundLaunch.tsx'
import {IcRoundLink} from './icons/IcRoundLink.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'
import {IcRoundTextSnippet} from './icons/IcRoundTextSnippet.tsx'
import {IcRoundUnfoldMore} from './icons/IcRoundUnfoldMore.tsx'

import 'allotment/dist/style.css'
import {Breadcrumb, DialogTrigger} from 'react-aria-components'
import {Button as UnstyledButton} from 'react-aria-components'
import {Dialog} from '../components/Dialog.tsx'
import {Link} from '../components/Link.tsx'
import {Modal} from '../components/Modal.tsx'
import {Select, SelectItem} from '../components/Select.tsx'
import {Breadcrumbs} from '../todo/Breadcrumbs.tsx'
import {IcRoundAddCircle} from './icons/IcRoundAddCircle.tsx'
import {IcRoundDragHandle} from './icons/IcRoundDragHandle.tsx'

function FoldControl() {
  return (
    <Button size="icon" appearance="outline" intent="secondary">
      <IcRoundUnfoldMore />
    </Button>
  )
}

function Settings() {
  return (
    <div className="settingsicons">
      <Button size="icon" appearance="outline" intent="secondary">
        <IcRoundSettings />
      </Button>
      <Button size="icon" appearance="outline" intent="secondary">
        <IcRoundClose />
      </Button>
    </div>
  )
}

interface BoxHeaderProps {
  children?: ReactNode
}

interface RowProps extends Omit<BoxRowProps, 'children'> {
  label?: string
  icon?: ReactNode
  action?: ReactNode
}

function RowComp({label, icon, action, ...rowProps}: RowProps) {
  return (
    <BoxRow {...rowProps}>
      <BoxHeader>
        {icon}
        <h3 className="label">{label}</h3>
      </BoxHeader>
      {action}
    </BoxRow>
  )
}

function TopBar() {
  return (
    <>
      <RailHeader className="alinea-rac-TopBarPadding">
        <h1 className="big-title">
          Flanders AI Conference @Wintercurcus Gent MEI 2025
        </h1>
        <div className="alinea-rac-TopBarButtons">
          <Button appearance="solid" intent="secondary">
            Save
          </Button>
          <Button appearance="solid">Publish</Button>
        </div>
      </RailHeader>
      <RailHeader className="alinea-rac-TopBar">
        <Statusbar status="published" />
      </RailHeader>
    </>
  )
}

function TextBlock() {
  return (
    <>
      <RowComp label="Text" action={<Settings />} />
      <BoxContent>
        <TextField label="Title" placeholder="Placeholder title" />
        <Box>
          <RowComp
            label="Item"
            icon={<IcRoundTextSnippet />}
            action={<FoldControl />}
          />
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
      <RowComp label="Link" action={<Settings />} />
      <BoxContent>
        <Box>
          <PageLink />
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

function MiddleContent() {
  return (
    <Box className="contentboxes">
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
          <RowComp label="Blocks" action={<FoldControl />} />
          <TextBlock />
          <TextBlock />
          <LinkBlock />
        </Box>
      </BoxContent>
    </Box>
  )
}

export function Home() {
  return (
    <Allotment className="allotment" snap>
      <Allotment.Pane minSize={176} maxSize={300} preferredSize={272}>
        <LeftBar />
      </Allotment.Pane>
      <Allotment.Pane snap={false}>
        <Rail className="content">
          <TopBar />
          <RailBody className="paddingMid">
            <MiddleContent />
          </RailBody>
        </Rail>
      </Allotment.Pane>
      <Allotment.Pane minSize={262} maxSize={512} preferredSize={332}>
        <RightBar />
      </Allotment.Pane>
    </Allotment>
  )
}

export function FormBuilder() {
  return (
    <Allotment className="allotment" snap>
      <Allotment.Pane minSize={176} maxSize={300} preferredSize={272}>
        <LeftBar />
      </Allotment.Pane>
      <Allotment.Pane snap={false}>
        <Rail className="content">
          <TopBar />
          <RailBody className="paddingMid">
            <Box className="contentboxes">
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
                      <Tab id="form">Form</Tab>
                      <Tab id="blocks">Blocks</Tab>
                      <Tab id="depricated">Deprecated</Tab>
                    </TabList>
                  </Tabs>

                  <RowComp label="Form" action={<Settings />} />
                  <BoxRow>
                    <BoxHeader>Form</BoxHeader>
                    <Settings />
                  </BoxRow>

                  <RowComp label="Text" action={<FoldControl />} />
                  <BoxContent>
                    <TextField label="Label" value="first name" isRequired />
                  </BoxContent>

                  <RowComp label="Options" action={<Settings />} />
                  <BoxContent className="borderbottom">
                    <TextField value="label" />
                  </BoxContent>

                  <BoxContent className="contentrow">
                    <IcRoundDragHandle className="noshrink" />
                    <TextField value="Label" />
                    <TextField value="Key" />
                    <Button size="icon" appearance="outline" intent="secondary">
                      <IcRoundClose />
                    </Button>
                  </BoxContent>

                  <RowComp
                    label="Add an option"
                    icon={<IcRoundAddCircle />}
                    className="centervalue"
                  />
                  <BoxRow className="centervalue">
                    <BoxHeader>
                      <IcRoundAddCircle /> Add an option
                    </BoxHeader>
                  </BoxRow>
                </Box>
              </BoxContent>
            </Box>
          </RailBody>
        </Rail>
      </Allotment.Pane>
      <Allotment.Pane minSize={262} maxSize={512} preferredSize={332}>
        <RightBar />
      </Allotment.Pane>
    </Allotment>
  )
}

interface PopupProps {
  title?: string
  button: ReactNode
  children: ReactNode
}

function Popup({button, children}: PopupProps) {
  return (
    <DialogTrigger>
      {button}
      <Modal>
        <Dialog>
          <BoxRow slot="title">
            <Breadcrumbs>
              <Breadcrumb>
                <Link>Workspace</Link>
              </Breadcrumb>
              <Breadcrumb>
                <Link>Root</Link>
              </Breadcrumb>
              <Breadcrumb>
                <Link>Page</Link>
              </Breadcrumb>
              <Breadcrumb>
                <Link>Child</Link>
              </Breadcrumb>
            </Breadcrumbs>
          </BoxRow>
          <BoxContent>{children}</BoxContent>
          <BoxRow className="bottombuttons">
            <Button slot="close" appearance="outline" intent="secondary">
              Cancel
            </Button>
            <Button slot="close">Create</Button>
          </BoxRow>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}

function PageLinkButton() {
  return (
    <UnstyledButton className="unstyled fullwidth">
      <BoxRow className="centervalue pageLinkRow">
        <BoxHeader>
          <IcRoundAddCircle />
          Page link
        </BoxHeader>
      </BoxRow>
    </UnstyledButton>
  )
}

function PageLink() {
  return (
    <Popup button={<PageLinkButton />}>
      <TextField label="Title" placeholder="placeholder title" />
      <Select label="Select type">
        <SelectItem>type1</SelectItem>
      </Select>
      <Box>
        <PageLinkButton />
      </Box>
    </Popup>
  )
}

export default {title: 'Stories / Update'}
