import clsx from 'clsx'
import {
  FieldError,
  Label,
  Text,
  TextArea as TextAreaPrimitive,
  TextField as TextFieldPrimitive,
  type TextFieldProps as TextFieldPrimitiveProps,
  type ValidationResult
} from 'react-aria-components'

export interface TextAreaProps extends TextFieldPrimitiveProps {
  autoSize?: boolean
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function TextArea({
  label,
  description,
  errorMessage,
  ...props
}: TextAreaProps) {
  return (
    <TextFieldPrimitive
      {...props}
      className={clsx('alinea-rac-TextField', props.className)}
    >
      <Label className="alinea-rac-Label">
        {label + (props.isRequired ? ' *' : '')}
      </Label>
      <TextAreaPrimitive className="alinea-rac-TextArea" />
      {description && <Text slot="description">{description}</Text>}
      <FieldError className="alinea-rac-FieldError">{errorMessage}</FieldError>
    </TextFieldPrimitive>
  )
}
