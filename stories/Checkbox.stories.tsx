import {Checkbox} from '../src/components/Checkbox.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => (
  <Stack>
    <Checkbox>Checkbox</Checkbox>
    <Checkbox isSelected>Checkbox isSelected</Checkbox>
    <Checkbox isInvalid>Checkbox isInvalid</Checkbox>
    <Checkbox isDisabled>Checkbox isDisabled</Checkbox>
  </Stack>
)
