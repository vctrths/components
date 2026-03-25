import clsx from 'clsx'
import {Button} from '../components/Button.tsx'
import {Icon} from '../components/Icon.tsx'
import {List, ListItem} from '../components/List.tsx'
import {Tab, TabList, TabPanel, Tabs} from '../components/Tabs.tsx'
import {TextField} from '../components/TextField.tsx'
import {IcRoundClose} from './icons/IcRoundClose.tsx'
import {IcRoundKeyboardArrowDown} from './icons/IcRoundKeyboardArrowDown.tsx'
import {IcRoundSettings} from './icons/IcRoundSettings.tsx'
import {IcRoundTextFields} from './icons/IcRoundTextFields.tsx'
import './ExampleBlocks.css'

interface ExampleBlocksProps {
  className?: string
}

interface BlockDefinition {
  id: string
  kind: 'text' | 'item'
  withNestedItems?: boolean
  nestedItemCount?: number
}

const blocks: BlockDefinition[] = [
  {
    id: 'text-1',
    kind: 'text'
  },
  {
    id: 'text-2',
    kind: 'text'
  },
  {
    id: 'text-3',
    kind: 'text',
    withNestedItems: true,
    nestedItemCount: 1
  },
  {
    id: 'text-4',
    kind: 'text',
    withNestedItems: true,
    nestedItemCount: 3
  },
  {
    id: 'text-5',
    kind: 'text',
    withNestedItems: true,
    nestedItemCount: 1
  }
]

interface BlockLabelRowProps {
  title: string
}

function BlockLabelRow({title}: BlockLabelRowProps) {
  return (
    <ListItem
      className="alinea-update-exampleBlocks-blockRow"
      leading={
        <Icon
          icon={IcRoundTextFields}
          className="alinea-update-exampleBlocks-smallIcon"
        />
      }
      trailing={
        <div className="alinea-update-exampleBlocks-controls">
          <Button
            size="icon"
            appearance="plain"
            aria-label="Open block settings"
          >
            <IcRoundSettings data-slot="icon" />
          </Button>
          <Button size="icon" appearance="plain" aria-label="Remove block">
            <IcRoundClose data-slot="icon" />
          </Button>
        </div>
      }
    >
      {title}
    </ListItem>
  )
}

interface TextInputRowsProps {
  withDescription?: boolean
}

function TextInputRows({withDescription}: TextInputRowsProps) {
  return (
    <div className="alinea-update-exampleBlocks-fields">
      {withDescription && (
        <TextField
          label="Title"
          placeholder="Placeholder text"
          className="alinea-update-exampleBlocks-input"
        />
      )}
      <TextField
        label={withDescription ? 'Description' : 'Text'}
        placeholder="Placeholder text"
        className="alinea-update-exampleBlocks-input"
      />
    </div>
  )
}

interface NestedItemsProps {
  itemCount: number
}

function NestedItems({itemCount}: NestedItemsProps) {
  return (
    <List className="alinea-update-exampleBlocks-nestedList">
      <ListItem
        className="alinea-update-exampleBlocks-sectionRow"
        trailing={
          <Button appearance="plain" size="small">
            Fold
            <IcRoundKeyboardArrowDown data-slot="icon" />
          </Button>
        }
      >
        Items
      </ListItem>
      {Array.from({length: itemCount}).map((_, index) => {
        const key = `item-${index + 1}`
        return (
          <div key={key} className="alinea-update-exampleBlocks-nestedItem">
            <List className="alinea-update-exampleBlocks-blockList">
              <BlockLabelRow title="Item" />
            </List>
            <div className="alinea-update-exampleBlocks-content">
              <TextInputRows />
            </div>
          </div>
        )
      })}
    </List>
  )
}

export function ExampleBlocks({className}: ExampleBlocksProps) {
  return (
    <div
      className={clsx('alinea-update-exampleBlocks', className)}
      data-node-id="547:26943"
    >
      <Tabs
        variant="line"
        defaultSelectedKey="blocks"
        className="alinea-update-exampleBlocks-tabs"
      >
        <TabList>
          <Tab id="blocks">Blocks</Tab>
          <Tab id="deprecated">Depricated</Tab>
        </TabList>

        <TabPanel id="blocks">
          <List className="alinea-update-exampleBlocks-mainList">
            <ListItem
              className="alinea-update-exampleBlocks-sectionRow"
              trailing={
                <Button appearance="plain" size="small">
                  Fold
                  <IcRoundKeyboardArrowDown data-slot="icon" />
                </Button>
              }
            >
              Blocks
            </ListItem>

            {blocks.map(block => (
              <div
                key={block.id}
                className="alinea-update-exampleBlocks-rootItem"
              >
                <List className="alinea-update-exampleBlocks-blockList">
                  <BlockLabelRow
                    title={block.kind === 'text' ? 'Text' : 'Item'}
                  />
                </List>
                <div className="alinea-update-exampleBlocks-content">
                  {block.withNestedItems ? (
                    <TextInputRows withDescription />
                  ) : (
                    <TextInputRows />
                  )}
                  {block.withNestedItems && block.nestedItemCount ? (
                    <NestedItems itemCount={block.nestedItemCount} />
                  ) : null}
                </div>
              </div>
            ))}
          </List>
        </TabPanel>

        <TabPanel id="deprecated">
          <List className="alinea-update-exampleBlocks-mainList">
            <ListItem className="alinea-update-exampleBlocks-emptyState">
              No deprecated blocks.
            </ListItem>
          </List>
        </TabPanel>
      </Tabs>
    </div>
  )
}
