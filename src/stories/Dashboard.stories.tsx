import {parseDate} from '@internationalized/date'
import {Button} from '../components/Button.tsx'
import {DatePicker} from '../components/DatePicker.tsx'
import {Icon} from '../components/Icon.tsx'
import {Menu, MenuItem} from '../components/Menu.tsx'
import {Tab, TabList, TabPanel, Tabs} from '../components/Tabs.tsx'
import {TextField} from '../components/TextField.tsx'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader
} from '../todo/Sidebar.tsx'
import {Tree, TreeItem} from '../todo/Tree.tsx'
import {IcOutlineDescription} from './icons/IcOutlineDescription.tsx'
import {IcRoundAddCircle} from './icons/IcRoundAddCircle.tsx'
import {IcRoundArrowBack} from './icons/IcRoundArrowBack.tsx'
import {IcRoundClose} from './icons/IcRoundClose.tsx'
import {IcRoundDescription} from './icons/IcRoundDescription.tsx'
import {IcRoundEdit} from './icons/IcRoundEdit.tsx'
import {IcRoundHome} from './icons/IcRoundHome.tsx'
import {IcRoundKeyboardArrowDown} from './icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundLink} from './icons/IcRoundLink.tsx'
import {IcRoundMoreVert} from './icons/IcRoundMoreVert.tsx'
import {IcRoundOpenInNew} from './icons/IcRoundOpenInNew.tsx'
import {IcRoundSearch} from './icons/IcRoundSearch.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'
import {IcRoundVisibility} from './icons/IcRoundVisibility.tsx'
import './Dashboard.css'

/* ------------------------------------------------------------------ */
/*  Small helpers                                                     */
/* ------------------------------------------------------------------ */

function StatusBadge({children}: {children: React.ReactNode}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 'var(--alinea-font-size-base)',
        color: '#16a34a'
      }}
    >
      <Icon icon={IcRoundVisibility} style={{width: 16, height: 16}} />
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Link field (URL with action buttons)                              */
/* ------------------------------------------------------------------ */

function LinkField({label, value}: {label: string; value: string}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
      <span
        style={{
          fontSize: 'var(--alinea-font-size-base)',
          color: 'var(--alinea-text-color-base)',
          fontWeight: 500
        }}
      >
        {label}
      </span>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          border: '1px solid var(--alinea-border-color)',
          borderRadius: 6,
          padding: '0 4px 0 8px',
          height: 36,
          background: 'var(--alinea-field-background)'
        }}
      >
        <Icon
          icon={IcRoundLink}
          style={{
            width: 16,
            height: 16,
            color: 'var(--alinea-text-color-base)',
            flexShrink: 0
          }}
        />
        <span
          style={{
            flex: 1,
            fontSize: 'var(--alinea-font-size-base)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: 'var(--alinea-text-color)'
          }}
        >
          {value}
        </span>
        <Button size="icon" appearance="plain" aria-label="Open in new tab">
          <IcRoundOpenInNew data-slot="icon" />
        </Button>
        <Button size="icon" appearance="plain" aria-label="Edit">
          <IcRoundEdit data-slot="icon" />
        </Button>
        <Button size="icon" appearance="plain" aria-label="Remove">
          <IcRoundClose data-slot="icon" />
        </Button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Dashboard story                                                   */
/* ------------------------------------------------------------------ */

export function Home() {
  return (
    <div className="alinea-dashboard-story">
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>
          <div className="alinea-dashboard-sidebarRow">
            <div className="alinea-dashboard-sidebarRowMenu">
              <Menu
                label={
                  <Button
                    appearance="plain"
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      fontWeight: 600,
                      fontSize: 'var(--alinea-font-size-base)',
                      padding: '4px 8px'
                    }}
                  >
                    Alinea
                    <IcRoundKeyboardArrowDown data-slot="icon" />
                  </Button>
                }
              >
                <MenuItem id="alinea">Alinea</MenuItem>
                <MenuItem id="marketing">Marketing</MenuItem>
                <MenuItem id="docs">Docs</MenuItem>
              </Menu>
            </div>
            <Button size="icon" appearance="plain" aria-label="Search pages">
              <IcRoundSearch data-slot="icon" />
            </Button>
          </div>
        </SidebarHeader>

        <SidebarBody style={{padding: '0 12px'}}>
          <div className="alinea-dashboard-sidebarRow alinea-dashboard-sidebarSectionHeader">
            <div className="alinea-dashboard-sidebarRowMenu">
              <Menu
                label={
                  <Button
                    appearance="plain"
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      fontSize: 'var(--alinea-font-size-base)',
                      fontWeight: 600,
                      color: 'var(--alinea-text-color-base)',
                      padding: '4px 8px'
                    }}
                  >
                    Pages
                    <IcRoundKeyboardArrowDown data-slot="icon" />
                  </Button>
                }
              >
                <MenuItem id="all-pages">All pages</MenuItem>
                <MenuItem id="recent-pages">Recent</MenuItem>
                <MenuItem id="archived-pages">Archived</MenuItem>
              </Menu>
            </div>
            <Button size="icon" appearance="plain" aria-label="Create new page">
              <IcRoundAddCircle data-slot="icon" />
            </Button>
          </div>
          <Tree
            aria-label="Pages"
            selectionMode="single"
            selectionBehavior="replace"
            defaultSelectedKeys={['blog-vercel']}
            defaultExpandedKeys={['blog']}
          >
            <TreeItem id="index" title="Index" icon={IcRoundHome} />
            <TreeItem id="blog" title="Blog" icon={IcOutlineDescription}>
              <TreeItem
                id="blog-vercel"
                title="Joining the Vercel Open Sour..."
                icon={IcRoundDescription}
              />
              <TreeItem
                id="blog-update"
                title="A Long-Overdue Update"
                icon={IcRoundDescription}
              />
              <TreeItem
                id="blog-rsc"
                title="RSC support and instant depl..."
                icon={IcRoundDescription}
              />
              <TreeItem
                id="blog-intro"
                title="Introducing Alinea"
                icon={IcRoundDescription}
              />
            </TreeItem>
            <TreeItem id="docs" title="Docs" icon={IcOutlineDescription} />
            <TreeItem id="roadmap" title="Roadmap" icon={IcRoundDescription} />
          </Tree>
        </SidebarBody>
        <SidebarFooter className="alinea-dashboard-sidebarFooter">
          <Button
            appearance="plain"
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              gap: 8,
              fontSize: 'var(--alinea-font-size-base)',
              color: 'var(--alinea-text-color-base)'
            }}
          >
            <Icon icon={IcRoundSettings} data-slot="icon" />
            User settings
          </Button>
        </SidebarFooter>
      </Sidebar>

      {/* Main content */}
      <main className="alinea-dashboard-main">
        {/* Top bar */}
        <header className="alinea-dashboard-header">
          <Button size="icon" appearance="plain" aria-label="Go back">
            <IcRoundArrowBack data-slot="icon" />
          </Button>
          <h1
            style={{
              fontSize: 'var(--alinea-font-size-base)',
              fontWeight: 600,
              margin: 0
            }}
          >
            Joining the Vercel Open Source Program
          </h1>
          <div style={{flex: 1}} />
          <StatusBadge>Published</StatusBadge>
          <Button size="icon" appearance="plain" aria-label="More options">
            <IcRoundMoreVert data-slot="icon" />
          </Button>
        </header>

        {/* Tabs */}
        <div className="alinea-dashboard-tabs">
          <Tabs variant="subtle">
            <TabList>
              <Tab id="document">
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <IcRoundDescription style={{width: 16, height: 16}} />
                  Document
                </span>
              </Tab>
              <Tab id="metadata">
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <IcRoundSettings style={{width: 16, height: 16}} />
                  Metadata
                </span>
              </Tab>
            </TabList>

            <TabPanel id="document">
              <div className="alinea-dashboard-form">
                {/* Title & Path */}
                <div className="alinea-dashboard-twoCol">
                  <TextField
                    label="Title"
                    isRequired
                    defaultValue="Joining the Vercel Open Source Program"
                  />
                  <TextField
                    label="Path"
                    isRequired
                    defaultValue="vercel-open-source-program"
                  />
                </div>

                {/* Publish date */}
                <DatePicker
                  label="Publish date"
                  defaultValue={parseDate('2025-11-08')}
                />

                {/* Author object */}
                <fieldset
                  style={{
                    border: '1px solid var(--alinea-border-color)',
                    borderRadius: 8,
                    padding: 16,
                    margin: 0
                  }}
                >
                  <legend
                    style={{
                      fontSize: 'var(--alinea-font-size-base)',
                      fontWeight: 500,
                      color: 'var(--alinea-text-color-base)',
                      padding: '0 4px'
                    }}
                  >
                    Author
                  </legend>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16
                    }}
                  >
                    <div className="alinea-dashboard-twoCol">
                      <TextField label="Name" defaultValue="Ben Merckx" />
                      <LinkField
                        label="Url"
                        value="https://github.com/benmerc..."
                      />
                    </div>
                    <LinkField
                      label="Avatar url"
                      value="https://avatars.githubusercontent.com/u/10584189?v=4&s=48"
                    />
                  </div>
                </fieldset>

                {/* Short introduction */}
                <TextField
                  label="Short introduction"
                  multiline
                  rows={3}
                  defaultValue="We're honored that Alinea CMS is part of the Vercel Open Source Program - Summer 2025 cohort. This recognition supports our mission to offer a clean, Git-based CMS built for Next.js."
                />

                {/* Body */}
                <TextField
                  label="Body"
                  multiline
                  rows={4}
                  defaultValue="We are pleased to share that Alinea CMS has been selected for the Vercel Open Source Program - Summer 2025 cohort. This program supports open source maintainers with the resources, infrastructure,"
                />
              </div>
            </TabPanel>

            <TabPanel id="metadata">
              <div className="alinea-dashboard-form">
                <p style={{color: 'var(--alinea-text-color-base)'}}>
                  Metadata fields will appear here.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

export default {title: 'Stories / Dashboard'}
