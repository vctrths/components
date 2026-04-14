import {DialogTrigger, Heading, TooltipProps} from 'react-aria-components'
import {Popover} from './Popover.tsx'
import { Button } from './Button.tsx'


type Placement = Pick<TooltipProps, "placement">["placement"]
const placements: Placement[] = ["bottom", "top", "left", "start", "right", "end"]

export const Example = (args: any) => (
 <div style={{marginTop: '256px', display: 'flex', gap: '256px', flexWrap: 'wrap'}}>
  {placements.map((placement) => (
    <DialogTrigger key={placement}>
      <Button aria-label="Help">ⓘ</Button>
      <Popover {...args} placement={placement} offset={24}>
        <Heading slot="title">Popover</Heading>
        <p>Showing popover at: {placement}</p>
      </Popover>
    </DialogTrigger>
  ))} 
  </ div>      
)


export default {
  title: 'Components / Popover'
}
