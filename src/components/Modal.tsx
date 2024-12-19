import clsx from 'clsx'
import {
  type ModalOverlayProps,
  Modal as ModalPrimitive
} from 'react-aria-components'

import './Modal.css'

export function Modal(props: ModalOverlayProps) {
  return (
    <ModalPrimitive
      {...props}
      className={clsx('alinea-Modal', props.className)}
    />
  )
}
