import {Radio, RadioGroup} from '../src/components/RadioGroup.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => {
  return (
    <Stack>
      <RadioGroup label="Favorite sport">
        <Radio value="soccer">Soccer</Radio>
        <Radio value="baseball">Baseball</Radio>
        <Radio value="basketball">Basketball</Radio>
      </RadioGroup>
    </Stack>
  )
}
