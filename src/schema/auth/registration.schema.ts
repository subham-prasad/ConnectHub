import {z} from 'zod';

export const registrationSchema = z.object({
  firstName: z.string().trim().min(1, "First Name is required"),
  lastName: z.string().trim().min(1, "Last Name is required"),
  username: z.string().trim(),
  password: z
    .string()
    .min(8, "Password should be of at least 8 characters")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
  .regex(/[0-9]/, "Must contain a number"),
});

export type RegistrationForm = z.infer<typeof registrationSchema>;
