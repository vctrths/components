import {Tab, TabList, TabPanel, Tabs} from '../src/components/Tabs.tsx'

export const Variants = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }}
  >
    <Tabs>
      <TabList>
        <Tab id="tab1">Tab 1</Tab>
        <Tab id="tab2">Tab 2</Tab>
        <Tab id="tab3">Tab 3</Tab>
      </TabList>
      <TabPanel id="tab1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TabPanel>
      <TabPanel id="tab2">
        Aliquam ipsum nisl, venenatis vitae volutpat in, sagittis lorem.
      </TabPanel>
      <TabPanel id="tab3">
        Proin rhoncus, nunc eu venenatis convallis, arcu sagittis risus.
      </TabPanel>
    </Tabs>
    <Tabs variant="subtle">
      <TabList>
        <Tab id="tab1">Tab 1</Tab>
        <Tab id="tab2">Tab 2</Tab>
        <Tab id="tab3">Tab 3</Tab>
      </TabList>
      <TabPanel id="tab1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TabPanel>
      <TabPanel id="tab2">
        Aliquam ipsum nisl, venenatis vitae volutpat in, sagittis lorem.
      </TabPanel>
      <TabPanel id="tab3">
        Proin rhoncus, nunc eu venenatis convallis, arcu sagittis risus.
      </TabPanel>
    </Tabs>
    <Tabs variant="enclosed">
      <TabList>
        <Tab id="tab1">Tab 1</Tab>
        <Tab id="tab2">Tab 2</Tab>
        <Tab id="tab3">Tab 3</Tab>
      </TabList>
      <TabPanel id="tab1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TabPanel>
      <TabPanel id="tab2">
        Aliquam ipsum nisl, venenatis vitae volutpat in, sagittis lorem.
      </TabPanel>
      <TabPanel id="tab3">
        Proin rhoncus, nunc eu venenatis convallis, arcu sagittis risus.
      </TabPanel>
    </Tabs>
  </div>
)

export const Orientation = () => (
  <Tabs orientation="vertical">
    <TabList>
      <Tab id="tab1">Tab 1</Tab>
      <Tab id="tab2">Tab 2</Tab>
      <Tab id="tab3">Tab 3</Tab>
    </TabList>
    <TabPanel id="tab1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </TabPanel>
    <TabPanel id="tab2">
      Aliquam ipsum nisl, venenatis vitae volutpat in, sagittis lorem.
    </TabPanel>
    <TabPanel id="tab3">
      Proin rhoncus, nunc eu venenatis convallis, arcu sagittis risus.
    </TabPanel>
  </Tabs>
)
