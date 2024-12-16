import {
  CheckboxGroup as CheckboxGroupPrimitive,
  type CheckboxGroupProps as CheckboxPrimitiveGroupProps,
  FieldError,
  Label,
  Text,
  type ValidationResult
} from 'react-aria-components'

import './CheckboxGroup.css'
import clsx from 'clsx'

export interface CheckboxGroupProps extends CheckboxPrimitiveGroupProps {
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function CheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: CheckboxGroupProps) {
  return (
    <CheckboxGroupPrimitive
      {...props}
      className={clsx('alinea-CheckboxGroup', props.className)}
    >
      {label && <Label>{label}</Label>}
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError className="alinea-FieldError">{errorMessage}</FieldError>
    </CheckboxGroupPrimitive>
  )
}
