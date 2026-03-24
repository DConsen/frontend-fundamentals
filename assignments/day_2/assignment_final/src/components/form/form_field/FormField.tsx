import {
  ErrorMessage,
  type FieldValuesFromFieldErrors,
} from '@hookform/error-message'
import type { ComponentProps } from 'react'
import {
  type FieldErrors,
  type FieldName,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
  useFormContext,
} from 'react-hook-form'

type InputProps<T extends FieldValues> = {
  label: string
  name: FieldPath<T>
  registerOptions?: RegisterOptions<T>
} & ComponentProps<'input'>

export function FormField<T extends FieldValues>({
  label,
  name,
  registerOptions,
  ...props
}: InputProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>()

  return (
    <label>
      {label}
      <input {...register(name, registerOptions)} {...props} />
      <ErrorMessage
        errors={errors}
        name={name as FieldName<FieldValuesFromFieldErrors<FieldErrors<T>>>}
        render={({ message }) => <span>❌ {message}</span>}
      />
    </label>
  )
}
