import type {Key, Selection} from '@react-types/shared'
import {useEffect, useState, useTransition} from 'react'
import {Collection, ListLayout, Virtualizer} from 'react-aria-components'
import {Stack} from '../stories/Stack.tsx'
import {IcOutlineDescription} from '../stories/icons/IcOutlineDescription.tsx'
import {IcRoundDescription} from '../stories/icons/IcRoundDescription.tsx'
import {IcRoundEdit} from '../stories/icons/IcRoundEdit.tsx'
import {IcRoundHome} from '../stories/icons/IcRoundHome.tsx'
import {IcRoundVisibility} from '../stories/icons/IcRoundVisibility.tsx'
import {IcRoundVisibilityOff} from '../stories/icons/IcRoundVisibilityOff.tsx'
import {Button} from './Button.tsx'
import {Checkbox} from './Checkbox.tsx'
import {Select, SelectItem} from './Select.tsx'
import {Tree, TreeItem} from './Tree.tsx'

interface TreeCountOption {
  id: string
  label: string
  amount: number
}

interface GeneratedTreeNode {
  id: string
  title: string
  children?: GeneratedTreeNode[]
}

const treeCountOptions: TreeCountOption[] = [
  {id: '10', label: '10 items', amount: 10},
  {id: '50', label: '50 items', amount: 50},
  {id: '100', label: '100 items', amount: 100},
  {id: '1000', label: '1000 items', amount: 1000}
]

function createGeneratedTree(
  itemCount: number,
  loadVersion: number
): GeneratedTreeNode[] {
  const sections: GeneratedTreeNode[] = []
  let itemNumber = 1
  let sectionNumber = 1

  while (itemNumber <= itemCount) {
    const folders: GeneratedTreeNode[] = []

    for (
      let folderNumber = 1;
      folderNumber <= 5 && itemNumber <= itemCount;
      folderNumber++
    ) {
      const items: GeneratedTreeNode[] = []

      for (
        let folderItemNumber = 1;
        folderItemNumber <= 10 && itemNumber <= itemCount;
        folderItemNumber++
      ) {
        items.push({
          id: `item-${itemNumber}`,
          title: `Item ${itemNumber} - Load ${loadVersion + 1}`
        })
        itemNumber++
      }

      folders.push({
        id: `folder-${sectionNumber}-${folderNumber}`,
        title: `Folder ${sectionNumber}.${folderNumber} - Load ${loadVersion + 1}`,
        children: items
      })
    }

    sections.push({
      id: `section-${sectionNumber}`,
      title: `Section ${sectionNumber} - Load ${loadVersion + 1}`,
      children: folders
    })

    sectionNumber++
  }

  return sections
}

function getTreeIcon(node: GeneratedTreeNode, level: number) {
  if (!node.children?.length) return IcRoundDescription
  if (level === 0) return IcRoundHome
  return IcOutlineDescription
}

function collectExpandableKeys(nodes: GeneratedTreeNode[]): Key[] {
  const keys: Key[] = []

  for (const node of nodes) {
    if (!node.children?.length) continue
    keys.push(node.id)
    keys.push(...collectExpandableKeys(node.children))
  }

  return keys
}

function renderGeneratedTreeNode(node: GeneratedTreeNode) {
  const level = node.id.startsWith('section-')
    ? 0
    : node.id.startsWith('folder-')
      ? 1
      : 2

  return (
    <TreeItem id={node.id} title={node.title} icon={getTreeIcon(node, level)}>
      {node.children ? (
        <Collection items={node.children}>{renderGeneratedTreeNode}</Collection>
      ) : null}
    </TreeItem>
  )
}

export const Example = () => (
  <Tree aria-label="Files" defaultExpandedKeys={['docs', 'blog']}>
    <TreeItem title="Documents" id="docs" icon={<IcOutlineDescription />}>
      <TreeItem title="Project" icon={<IcOutlineDescription />}>
        <TreeItem title="Weekly Report" icon={<IcRoundDescription />} />
      </TreeItem>
    </TreeItem>
    <TreeItem title="Photos" icon={<IcOutlineDescription />}>
      <TreeItem title="Image 1" icon={<IcRoundDescription />} />
      <TreeItem title="Image 2" icon={<IcRoundDescription />} />
    </TreeItem>
  </Tree>
)

export function WithStatus() {
  return (
    <Tree
      aria-label="Pages"
      defaultExpandedKeys={['folder', 'status', 'unpublished']}
      selectionMode="single"
      defaultSelectedKeys={['published']}
    >
      <TreeItem title="Examples" id="examples" icon={<IcOutlineDescription />}>
        <TreeItem title="Getting Started" icon={<IcRoundDescription />} />
      </TreeItem>
      <TreeItem title="Folder" id="folder" icon={<IcOutlineDescription />}>
        <TreeItem
          title="Sub folder"
          icon={<IcOutlineDescription />}
          suffix={<IcRoundHome style={{width: 14, height: 14}} />}
        />
      </TreeItem>
      <TreeItem title="Status" id="status" icon={<IcOutlineDescription />}>
        <TreeItem
          id="published"
          title="Published"
          icon={<IcRoundDescription />}
          suffix={
            <IcRoundVisibility
              style={{width: 14, height: 14, color: '#16a34a'}}
            />
          }
        />
        <TreeItem
          title="Sub folder"
          icon={<IcOutlineDescription />}
          suffix={<IcRoundHome style={{width: 14, height: 14}} />}
        />
        <TreeItem
          title="Unpublished"
          id="unpublished"
          icon={<IcOutlineDescription />}
          suffix={
            <IcRoundVisibilityOff
              style={{width: 14, height: 14, color: '#d97706'}}
            />
          }
        >
          <TreeItem
            title="Inner"
            icon={<IcRoundDescription />}
            suffix={
              <IcRoundVisibilityOff
                style={{width: 14, height: 14, color: '#d97706'}}
              />
            }
          />
        </TreeItem>
        <TreeItem
          title="Draft"
          icon={<IcRoundDescription />}
          suffix={
            <IcRoundEdit style={{width: 14, height: 14, color: '#2563eb'}} />
          }
        />
      </TreeItem>
    </Tree>
  )
}

const layoutOptions = {
  rowHeight: 31
}

function waitForTransition() {
  return new Promise(resolve => {
    setTimeout(resolve, 10)
  })
}

export function DynamicList() {
  const [selectedAmount, setSelectedAmount] = useState('100')
  const [loadVersion, setLoadVersion] = useState(0)
  const [isPending, startTransition] = useTransition()
  const itemCount =
    treeCountOptions.find(option => option.id === selectedAmount)?.amount ?? 100
  const nodes = createGeneratedTree(itemCount, loadVersion)
  const defaultExpandedKeys = [
    nodes[0]?.id,
    nodes[0]?.children?.[0]?.id
  ].filter((key): key is string => Boolean(key))
  const allExpandableKeys = collectExpandableKeys(nodes)
  const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(
    () => new Set(defaultExpandedKeys)
  )
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set())
  const [isExpandAllPreferred, setIsExpandAllPreferred] = useState(false)
  const isAllExpanded =
    allExpandableKeys.length > 0 &&
    allExpandableKeys.every(key => expandedKeys.has(key))
  const isPartiallyExpanded = expandedKeys.size > 0 && !isAllExpanded

  function handleAmountChange(key: Key | null) {
    if (key) setSelectedAmount(String(key))
  }

  function handleExpandAllChange(isSelected: boolean) {
    setIsExpandAllPreferred(isSelected)
    setExpandedKeys(
      isSelected ? new Set<Key>(allExpandableKeys) : new Set<Key>()
    )
  }

  function handleExpandedChange(keys: Set<Key>) {
    setExpandedKeys(keys)
    setIsExpandAllPreferred(
      allExpandableKeys.length > 0 &&
        allExpandableKeys.every(key => keys.has(key))
    )
  }

  function runSimulatedTransition(update?: () => void) {
    if (isPending) return
    startTransition(async () => {
      await waitForTransition()
      update?.()
      setLoadVersion(current => current + 1)
    })
  }

  function handleSimulateTransition() {
    runSimulatedTransition()
  }

  function handleSelectionChange(keys: Selection) {
    if (keys === 'all') return
    runSimulatedTransition(() => {
      setSelectedKeys(new Set(keys))
    })
  }

  useEffect(() => {
    setExpandedKeys(current => {
      if (isExpandAllPreferred) return new Set<Key>(allExpandableKeys)
      if (current.size === 0) return current

      const validKeys = new Set(allExpandableKeys)
      const nextKeys = new Set<Key>(
        Array.from(current).filter(key => validKeys.has(key))
      )

      return nextKeys.size ? nextKeys : new Set<Key>(defaultExpandedKeys)
    })
  }, [selectedAmount])

  return (
    <Stack align="normal" style={{width: 420, maxWidth: '100%'}}>
      <Button
        appearance="outline"
        intent="secondary"
        isPending={isPending}
        onPress={handleSimulateTransition}
      >
        Simulate transition
      </Button>

      <Select
        items={treeCountOptions}
        label="Items"
        selectedKey={selectedAmount}
        onSelectionChange={handleAmountChange}
      >
        {item => <SelectItem key={item.id}>{item.label}</SelectItem>}
      </Select>

      <Checkbox
        isSelected={isAllExpanded}
        isIndeterminate={isPartiallyExpanded}
        onChange={handleExpandAllChange}
      >
        Expand all
      </Checkbox>

      <div style={{height: 420, minHeight: 0, overflow: 'hidden'}}>
        <Virtualizer
          key={selectedAmount}
          layout={ListLayout}
          layoutOptions={layoutOptions}
        >
          <Tree
            aria-label={`Generated tree with ${itemCount} items`}
            items={nodes}
            expandedKeys={expandedKeys}
            onExpandedChange={handleExpandedChange}
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
            selectionMode="single"
            style={{width: '100%', height: '100%', display: 'block'}}
          >
            {renderGeneratedTreeNode}
          </Tree>
        </Virtualizer>
      </div>
    </Stack>
  )
}

export default {
  title: 'Components / Tree'
}
