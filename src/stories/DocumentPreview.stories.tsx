import {useMemo} from 'react'
import {Breadcrumb} from 'react-aria-components'
import {Button} from '../components/Button.tsx'
import {Link} from '../components/Link.tsx'
import {Select, SelectItem} from '../components/Select.tsx'
import {Tab, TabList, TabPanel, Tabs} from '../components/Tabs.tsx'
import {TextField} from '../components/TextField.tsx'
import {Breadcrumbs} from '../todo/Breadcrumbs.tsx'
import {ExampleBlocks} from './ExampleBlocks.tsx'
import {IcRoundArrowBack} from './icons/IcRoundArrowBack.tsx'
import {IcRoundArrowForward} from './icons/IcRoundArrowForward.tsx'
import {IcRoundAddCircle} from './icons/IcRoundAddCircle.tsx'
import {IcRoundHistory} from './icons/IcRoundHistory.tsx'
import {IcRoundKeyboardArrowDown} from './icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundKeyboardTab} from './icons/IcRoundKeyboardTab.tsx'
import {IcRoundMoreVert} from './icons/IcRoundMoreVert.tsx'
import {IcRoundOpenInNew} from './icons/IcRoundOpenInNew.tsx'
import {IcRoundRefresh} from './icons/IcRoundRefresh.tsx'
import {IcRoundSearch} from './icons/IcRoundSearch.tsx'
import {IcRoundVisibility} from './icons/IcRoundVisibility.tsx'
import './DocumentPreview.css'

interface PageLink {
  id: string
  label: string
  expandable?: boolean
}

const pageLinks: PageLink[] = [
  {id: 'home', label: 'Home'},
  {id: 'about', label: 'About us'},
  {id: 'services', label: 'Services', expandable: true},
  {id: 'team', label: 'Our team', expandable: true},
  {id: 'portfolio', label: 'Portfolio', expandable: true},
  {id: 'news', label: 'News', expandable: true},
  {id: 'faq', label: 'FAQ', expandable: true},
  {id: 'contact', label: 'Contact'},
  {id: 'privacy', label: 'Privacy Police'}
]

interface DocumentPreviewLeftbarProps {
  links: PageLink[]
}

function DocumentPreviewLeftbar({links}: DocumentPreviewLeftbarProps) {
  return (
    <aside className="alinea-documentPreview-leftbar">
      <header className="alinea-documentPreview-leftbarTop">
        <Button
          size="icon"
          appearance="solid"
          className="alinea-documentPreview-brandButton"
        >
          a
        </Button>
        <span className="alinea-documentPreview-brandLabel">Alinea</span>
        <IcRoundKeyboardArrowDown className="alinea-documentPreview-miniIcon" />
        <Select defaultSelectedKey="be" aria-label="Locale">
          <SelectItem key="be">BE</SelectItem>
          <SelectItem key="nl">NL</SelectItem>
          <SelectItem key="en">EN</SelectItem>
        </Select>
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundSearch className="alinea-documentPreview-miniIcon" />
        </Button>
      </header>

      <div className="alinea-documentPreview-leftbarFilter">
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundArrowBack className="alinea-documentPreview-miniIcon" />
        </Button>
        <Select defaultSelectedKey="pages" aria-label="Page scope">
          <SelectItem key="pages">Pages</SelectItem>
          <SelectItem key="media">Media</SelectItem>
        </Select>
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundAddCircle className="alinea-documentPreview-miniIcon" />
        </Button>
      </div>

      <nav className="alinea-documentPreview-nav" aria-label="Site pages">
        {links.map(page => (
          <Link
            key={page.id}
            className="alinea-documentPreview-navLink"
            variant="inherit"
          >
            <span>{page.label}</span>
            {page.expandable ? (
              <IcRoundKeyboardArrowDown className="alinea-documentPreview-miniIcon" />
            ) : null}
          </Link>
        ))}
      </nav>

      <footer className="alinea-documentPreview-leftbarBottom">
        <div className="alinea-documentPreview-settingsCard">
          <div className="alinea-documentPreview-themeRow">
            <span>Theme</span>
            <div className="alinea-documentPreview-themeActions">
              <Button size="icon" appearance="plain" aria-label="Desktop" />
              <Button size="icon" appearance="plain" aria-label="Light" />
              <Button size="icon" appearance="plain" aria-label="Dark" />
            </div>
          </div>
          <div className="alinea-documentPreview-logoutRow">
            <span>Logout</span>
          </div>
        </div>
        <div className="alinea-documentPreview-profileRow">
          <span>John Doe</span>
          <Button size="icon" appearance="outline" intent="secondary">
            <IcRoundMoreVert className="alinea-documentPreview-miniIcon" />
          </Button>
        </div>
      </footer>
    </aside>
  )
}

function DocumentPreviewMiddle() {
  return (
    <main className="alinea-documentPreview-middle">
      <header className="alinea-documentPreview-topbar">
        <h1>Flanders AI Conference @Wintercircus Gent MEI 2025</h1>
        <div className="alinea-documentPreview-topbarActions">
          <Button appearance="solid">Publish</Button>
          <Button appearance="solid" intent="secondary">
            Save
          </Button>
          <Button size="icon" appearance="outline" intent="secondary">
            <IcRoundMoreVert className="alinea-documentPreview-miniIcon" />
          </Button>
        </div>
      </header>

      <div className="alinea-documentPreview-statusbar">
        <Breadcrumbs>
          <Breadcrumb>
            <Link variant="inherit">Pages</Link>
          </Breadcrumb>
          <Breadcrumb>
            <Link variant="inherit">Parent</Link>
          </Breadcrumb>
        </Breadcrumbs>
        <div className="alinea-documentPreview-published">
          <IcRoundVisibility className="alinea-documentPreview-miniIcon" />
          Published
        </div>
      </div>

      <section className="alinea-documentPreview-content">
        <div className="alinea-documentPreview-contentBox">
          <Tabs variant="line" defaultSelectedKey="document">
            <TabList>
              <Tab id="document">Document</Tab>
              <Tab id="metadata">Metadata</Tab>
            </TabList>

            <TabPanel id="document">
              <div className="alinea-documentPreview-metadataFields">
                <TextField label="Title" placeholder="Placeholder text" />
                <TextField label="Path" placeholder="Placeholder text" />
              </div>
              <ExampleBlocks className="alinea-documentPreview-exampleBlocks" />
            </TabPanel>

            <TabPanel id="metadata">
              <div className="alinea-documentPreview-metadataFields">
                <TextField label="SEO title" placeholder="Placeholder text" />
                <TextField label="Canonical url" placeholder="Placeholder text" />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

function DocumentPreviewRightbar() {
  return (
    <aside className="alinea-documentPreview-rightbar">
      <header className="alinea-documentPreview-rightbarTop">
        <Button size="icon" appearance="outline" intent="secondary">
          <IcRoundKeyboardTab className="alinea-documentPreview-miniIcon" />
        </Button>
        <Tabs variant="subtle" defaultSelectedKey="history">
          <TabList>
            <Tab id="history">
              <IcRoundHistory className="alinea-documentPreview-miniIcon" />
              History
            </Tab>
            <Tab id="preview">
              <IcRoundVisibility className="alinea-documentPreview-miniIcon" />
              Preview
            </Tab>
          </TabList>
        </Tabs>
      </header>
      <div className="alinea-documentPreview-rightbarTabs">
        <div className="alinea-documentPreview-browserActions">
          <Button size="icon" appearance="plain" aria-label="Back">
            <IcRoundArrowBack data-slot="icon" />
          </Button>
          <Button size="icon" appearance="plain" aria-label="Forward">
            <IcRoundArrowForward data-slot="icon" />
          </Button>
          <Button size="icon" appearance="plain" aria-label="Refresh">
            <IcRoundRefresh data-slot="icon" />
          </Button>
        </div>
        <Button size="icon" appearance="plain" aria-label="Open externally">
          <IcRoundOpenInNew data-slot="icon" />
        </Button>
      </div>
      <div className="alinea-documentPreview-previewSurface" />
    </aside>
  )
}

export function DocumentPreview() {
  const links = useMemo(() => pageLinks, [])

  return (
    <div className="alinea-documentPreview-story" data-node-id="470:19151">
      <DocumentPreviewLeftbar links={links} />
      <DocumentPreviewMiddle />
      <DocumentPreviewRightbar />
    </div>
  )
}

export default {title: 'Stories / Document Preview'}