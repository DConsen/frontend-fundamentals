import * as z from 'zod'

export const AddressSchema = z
  .object({
    street: z.string().min(1, 'Please enter your street name'),
    houseNumber: z.string().min(1, 'Please enter your house number'),
    houseNumberAddition: z.string().optional(),
    postalCode: z.string().min(1, 'Please enter your postal code'),
    city: z.string().min(1, 'Please enter your city'),
    country: z.string().min(1, 'Please enter your country'),
  })
  .required()

export type Address = z.infer<typeof AddressSchema>
