import {
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  FieldError,
  Label,
  Text,
  type ValidationResult
} from 'react-aria-components'

import './RadioGroup.css'

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
    <AriaRadioGroup {...props}>
      <Label>{label}</Label>
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </AriaRadioGroup>
  )
}
