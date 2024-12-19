import {TextArea} from '../src/components/TextArea.tsx'
import {TextField} from '../src/components/TextField.tsx'
import {Stack} from './Stack.tsx'

export const Example = () => {
  return (
    <Stack>
      <TextField label="TextField" />
      <TextField label="TextField" isRequired />
      <TextField label="TextField" placeholder="Placeholder" />
      <TextField label="TextField" description="TextField with description" />
      <TextArea label="TextArea" />
    </Stack>
  )
}

export const Types = () => {
  return (
    <Stack>
      <TextField type="email" label="Email" />
      <TextField type="password" label="Password" />
      <TextField type="tel" label="Phone" />
      <TextField type="text" label="Text" />
      <TextField type="url" label="Url" />
    </Stack>
  )
}
