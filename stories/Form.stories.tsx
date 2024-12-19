import {Button, FieldError, Input, Label} from 'react-aria-components'
import {Form} from '../src/components/Form.tsx'
import {TextField} from '../src/components/TextField.tsx'

export const Example = (args: any) => (
  <Form {...args}>
    <TextField name="email" type="email" isRequired>
      <Label>Email</Label>
      <Input />
      <FieldError />
    </TextField>
    <Button type="submit">Submit</Button>
  </Form>
)
