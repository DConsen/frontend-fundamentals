import type { ComponentProps } from 'react'

type FieldsetProps = {
  label: string
} & ComponentProps<'fieldset'>

export function Fieldset({ label, children, ...props }: FieldsetProps) {
  return (
    <fieldset {...props}>
      <legend>{label}</legend>
      {children}
    </fieldset>
  )
}
