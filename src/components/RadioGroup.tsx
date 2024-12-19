import {
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  FieldError,
  Label,
  Text,
  type ValidationResult
} from 'react-aria-components'
import {Radio as RadioPrimitive, type RadioProps} from 'react-aria-components'
import './RadioGroup.css'
import clsx from 'clsx'

export type {RadioProps} from 'react-aria-components'

export function Radio(props: RadioProps) {
  return (
    <RadioPrimitive
      {...props}
      className={clsx('alinea-rac-Radio', props.className)}
    />
  )
}

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'children'> {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup
      {...props}
      className={clsx('alinea-rac-RadioGroup', props.className)}
    >
      <Label>{label}</Label>
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError className="alinea-rac-FieldError">{errorMessage}</FieldError>
    </AriaRadioGroup>
  )
}
