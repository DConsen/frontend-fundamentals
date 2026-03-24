import * as z from "zod";
import { PersonalInformationSchema } from "./personalInformation.schema.ts";
import { AddressSchema } from "./address.schema.ts";

export const SignupSchema = z.object({
  personalInformation: PersonalInformationSchema,
  address: AddressSchema,
});

export type Signup = z.infer<typeof SignupSchema>;
