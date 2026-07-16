import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().trim().min(1, "Full Name is required"),
  userName: z.string().trim().min(3, "Username must be at least 3 characters"),
  password: z
    .string()
    .min(8, "Password should be of at least 8 characters")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[0-9]/, "Must contain a number"),
  email: z.email("Please enter a valid email address"),
  bio: z.string().trim().optional(),
});

export type RegistrationForm = z.infer<typeof registrationSchema>;
