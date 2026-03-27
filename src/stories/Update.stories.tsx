import './Update.css'
import {Breadcrumb} from 'react-aria-components'
import {Box} from '../components/Box.tsx'
import {BoxContent} from '../components/BoxContent.tsx'
import {BoxRow} from '../components/BoxRow.tsx'
import {Button} from '../components/Button.tsx'
import {LeftBar} from '../components/LeftBar.tsx'
import {Link} from '../components/Link.tsx'
import {RightBar} from '../components/RightBar.tsx'
import {Tab, TabList, Tabs} from '../components/Tabs.tsx'
import {TextField} from '../components/TextField.tsx'
import {Breadcrumbs} from '../todo/Breadcrumbs.tsx'
import {IcRoundClose} from './icons/IcRoundClose.tsx'
import {IcRoundRemoveRedEye} from './icons/IcRoundRemoveRedEye.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'
import {IcRoundTextFields} from './icons/IcRoundTextFields.tsx'
import {IcRoundTextSnippet} from './icons/IcRoundTextSnippet.tsx'
import {IcRoundUnfoldMore} from './icons/IcRoundUnfoldMore.tsx'

export function Home() {
  return (
    <div className="alinea-view">
      <LeftBar />
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
          <div className="published-badge">
            <IcRoundRemoveRedEye />
            <p className="sublabel">Published</p>
          </div>
        </div>
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
                <TextField label="Title" placeholder="Placeholder title" />
                <TextField label="Path" placeholder="Placeholder path" />
              </div>
              <Box>
                <Tabs variant="line" className="tabs">
                  <TabList>
                    <Tab id="blocks">Blocks</Tab>
                    <Tab id="depricated">Depricated</Tab>
                  </TabList>
                </Tabs>
                <BoxRow label="Blocks">
                  <h3 className="label">Fold</h3>
                  <IcRoundUnfoldMore />
                </BoxRow>
                <BoxRow label="Text" icon={<IcRoundTextFields />}>
                  <Button size="icon" appearance="plain" intent="secondary">
                    <IcRoundSettings />
                  </Button>
                  <Button size="icon" appearance="plain" intent="secondary">
                    <IcRoundClose />
                  </Button>
                </BoxRow>
                <BoxContent>
                  <div className="inputbox">
                    <TextField label="Title" placeholder="Placeholder title" />
                  </div>
                  <Box>
                    <BoxRow label="Items">
                      <h3 className="label">Fold</h3>
                      <IcRoundUnfoldMore />
                    </BoxRow>
                    <BoxRow label="Item" icon={<IcRoundTextSnippet />}>
                      <Button size="icon" appearance="plain" intent="secondary">
                        <IcRoundSettings />
                      </Button>
                      <Button size="icon" appearance="plain" intent="secondary">
                        <IcRoundClose />
                      </Button>
                    </BoxRow>
                    <BoxContent>
                      <TextField label="Text" placeholder="Placeholder text" />
                    </BoxContent>
                  </Box>
                </BoxContent>
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
