import {Radio} from 'react-aria-components'
import {RadioGroup} from '../src/components/RadioGroup.tsx'

export const Example = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <RadioGroup label="Favorite sport">
        <Radio value="soccer">Soccer</Radio>
        <Radio value="baseball">Baseball</Radio>
        <Radio value="basketball">Basketball</Radio>
      </RadioGroup>
    </div>
  )
}
