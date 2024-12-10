import {ToggleButton} from 'react-aria-components'
import {ToggleButtonGroup} from '../src/todo/ToggleButtonGroup'

export const Example = (args: any) => (
  <ToggleButtonGroup {...args}>
    <ToggleButton id="left">Left</ToggleButton>
    <ToggleButton id="center">Center</ToggleButton>
    <ToggleButton id="right">Right</ToggleButton>
  </ToggleButtonGroup>
)
