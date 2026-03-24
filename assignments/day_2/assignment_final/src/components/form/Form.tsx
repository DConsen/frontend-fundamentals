import { type FieldErrors, FormProvider, useForm } from 'react-hook-form'
import { SignupSchema, type Signup } from '../../schemas/signup.schema.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { PersonalInformationForm } from './personal_information/PersonalInformationForm.tsx'
import { AddressForm } from './address/AddressForm.tsx'

export function Form() {
  const methods = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      personalInformation: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: undefined,
      },
      address: {
        street: '',
        houseNumber: '',
        houseNumberAddition: undefined,
        postalCode: '',
        city: '',
        country: '',
      },
    },
  })
  const { handleSubmit } = methods

  const onSubmit = (data: Signup) => {
    console.log(data)
  }

  const onError = (errors: FieldErrors<Signup>) => {
    console.error('Form is invalid', errors)
  }

  return (
    <section>
      <h2>Signup</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <PersonalInformationForm />
          <AddressForm />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </section>
  )
}
