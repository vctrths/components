import {
  Collection,
  Button as RacButton,
  useDragAndDrop,
  useTreeData
} from 'react-aria-components'
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
import {Tree, TreeItem} from './Tree.tsx'

function Tempaicon() {
  return (
    <div className="tempaicon">
      <h3>a</h3>
    </div>
  )
}

export function LeftBar() {
  const tree = useTreeData({
    initialItems: [
      {
        id: '1',
        title: 'Documents',
        type: 'directory',
        children: [
          {
            id: '2',
            title: 'Project',
            type: 'directory',
            children: [
              {id: '3', title: 'Weekly Report', type: 'file', children: []},
              {id: '4', title: 'Budget', type: 'file', children: []}
            ]
          }
        ]
      },
      {
        id: '5',
        title: 'Photos',
        type: 'directory',
        children: [
          {id: '6', title: 'Image 1', type: 'file', children: []},
          {id: '7', title: 'Image 2', type: 'file', children: []}
        ]
      }
    ]
  })

  const {dragAndDropHooks} = useDragAndDrop({
    getItems: keys =>
      [...keys].map(key => {
        const item = tree.getItem(key)
        return {'text/plain': item.value.title}
      }),
    onMove(e) {
      if (e.target.dropPosition === 'before') {
        tree.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === 'after') {
        tree.moveAfter(e.target.key, e.keys)
      } else if (e.target.dropPosition === 'on') {
        // Move items to become children of the target
        const targetNode = tree.getItem(e.target.key)
        if (targetNode) {
          const targetIndex = targetNode.children
            ? targetNode.children.length
            : 0
          const keyArray = Array.from(e.keys)
          for (let i = 0; i < keyArray.length; i++) {
            tree.move(keyArray[i], e.target.key, targetIndex + i)
          }
        }
      }
    }
  })

  const treeLayoutOptions = {
    rowHeight: 34,
    padding: 0,
    gap: 1
  }
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
        <Tree
          aria-label="Tree with hierarchical drag and drop"
          items={tree.items}
          dragAndDropHooks={dragAndDropHooks}
        >
          {function renderItem(item) {
            return (
              <TreeItem title={item.value.title} id={item.value.id}>
                {item.children && (
                  <Collection items={item.children}>{renderItem}</Collection>
                )}
              </TreeItem>
            )
          }}
        </Tree>
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
