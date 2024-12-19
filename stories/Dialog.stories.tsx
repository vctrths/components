import {DialogTrigger, Heading} from 'react-aria-components'
import {Button} from '../src/components/Button.tsx'
import {Dialog} from '../src/components/Dialog.tsx'
import {Form} from '../src/components/Form.tsx'
import {Modal} from '../src/components/Modal.tsx'
import {TextField} from '../src/components/TextField.tsx'

export const Example = () => (
  <DialogTrigger>
    <Button>Sign up…</Button>
    <Modal>
      <Dialog>
        <Form>
          <Heading slot="title">Sign up</Heading>
          <TextField name="fname" isRequired label="First Name" autoFocus />
          <TextField name="lname" isRequired label="Last Name" />
          <Button slot="close" style={{marginTop: 8}}>
            Submit
          </Button>
        </Form>
      </Dialog>
    </Modal>
  </DialogTrigger>
)
