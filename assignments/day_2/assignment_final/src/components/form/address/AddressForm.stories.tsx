import { AddressForm } from './AddressForm.tsx'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormProvider, useForm } from 'react-hook-form'
import { SignupSchema } from '../../../schemas/signup.schema.ts'
import { zodResolver } from '@hookform/resolvers/zod'

const meta = {
  title: 'AddressForm',
  component: AddressForm,
  decorators: [
    (Story) => {
      const methods = useForm({
        resolver: zodResolver(SignupSchema),
      })

      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      )
    },
  ],
} as Meta<typeof AddressForm>

export default meta
type Story = StoryObj<typeof AddressForm>

export const Default: Story = {}
