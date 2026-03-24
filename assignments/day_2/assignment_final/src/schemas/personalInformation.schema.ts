import * as z from 'zod'
import { startOfToday, subYears } from 'date-fns'

export const PersonalInformationSchema = z.object({
  firstName: z.string().min(1, { message: 'Please enter your first name.' }),
  lastName: z.string().min(1, { message: 'Please enter your last name.' }),
  email: z
    .email({
      error: 'Please enter a valid email address.',
    })
    .min(1, { message: 'Please enter a valid email address.' }),
  phoneNumber: z
    .string()
    .min(1, { message: 'Please enter your phone number.' }),
  dateOfBirth: z
    .date({
      error: 'Please enter your date of birth.',
    })
    .max(new Date(subYears(startOfToday(), 18)), {
      error: 'You must be at least 18 years old.',
    }),
})

export type PersonalInformation = z.infer<typeof PersonalInformationSchema>
