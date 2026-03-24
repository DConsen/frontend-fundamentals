import type { Signup } from '../../../schemas/signup.schema.ts'
import { Fieldset } from '../fieldset/Fieldset.tsx'
import { FormField } from '../form_field/FormField.tsx'

export function AddressForm() {
  return (
    <Fieldset label="Address">
      <FormField<Signup> label="Street:" name="address.street" />
      <FormField<Signup> label="House number:" name="address.houseNumber" />
      <FormField<Signup>
        label="House number addition:"
        name="address.houseNumberAddition"
      />
      <FormField<Signup> label="Postal code:" name="address.postalCode" />
      <FormField<Signup> label="City:" name="address.city" />
      <FormField<Signup> label="Country:" name="address.country" />
    </Fieldset>
  )
}
