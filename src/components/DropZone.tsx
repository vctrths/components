import clsx from 'clsx'
import type {DropZoneProps as DropPrimitiveZoneProps} from 'react-aria-components'
import {DropZone as DropPrimitiveZone} from 'react-aria-components'

import './DropZone.css'

export interface DropZoneProps extends DropPrimitiveZoneProps {}

export function DropZone(props: DropZoneProps) {
  return (
    <DropPrimitiveZone
      {...props}
      className={clsx('alinea-rac-Dropzone', props.className)}
    />
  )
}
