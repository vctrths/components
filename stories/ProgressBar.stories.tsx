import {ProgressBar} from '../src/todo/ProgressBar'

export const Example = (args: any) => <ProgressBar {...args} />

Example.args = {
  label: 'Loading…',
  value: 80
}
