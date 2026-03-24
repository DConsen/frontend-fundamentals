import { Fieldset } from '../fieldset/Fieldset.tsx'
import { FormField } from '../form_field/FormField.tsx'
import type { Signup } from '../../../schemas/signup.schema.ts'

export function PersonalInformationForm() {
  return (
    <Fieldset label="Personal Information">
      <FormField<Signup>
        label="First name:"
        name="personalInformation.firstName"
      />
      <FormField<Signup>
        label="Last name:"
        name="personalInformation.lastName"
      />
      <FormField<Signup>
        label="Email address:"
        name="personalInformation.email"
      />
      <FormField<Signup>
        label="Phone number:"
        name="personalInformation.phoneNumber"
      />
      <FormField<Signup>
        label="Date of birth:"
        name="personalInformation.dateOfBirth"
        registerOptions={{ valueAsDate: true }}
        type="date"
      />
    </Fieldset>
  )
}
