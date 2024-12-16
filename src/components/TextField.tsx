import {
  FieldError,
  Input,
  Label,
  Text,
  TextArea,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps,
  type ValidationResult
} from 'react-aria-components'
import './TextField.css'
import clsx from 'clsx'

export interface TextFieldProps extends TextFieldPrimitiveProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  isTextarea?: boolean
}

export function TextField({
  label,
  description,
  errorMessage,
  isTextarea,
  ...props
}: TextFieldProps) {
  return (
    <TextFieldPrimitive
      {...props}
      className={clsx('alinea-TextField', props.className)}
    >
      <Label className="alinea-Label">
        {label + (props.isRequired ? ' *' : '')}
      </Label>
      {isTextarea ? (
        <TextArea className="alinea-TextArea" />
      ) : (
        <Input className="alinea-Input" />
      )}
      {description && <Text slot="description">{description}</Text>}
      <FieldError className="alinea-FieldError">{errorMessage}</FieldError>
    </TextFieldPrimitive>
  )
}
