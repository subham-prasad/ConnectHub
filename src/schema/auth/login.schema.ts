import { z } from "zod";

const isValidIdentifier = (value: string) => {
  const trimmed = value.trim();

  const isEmail = z.email().safeParse(trimmed).success;
  const isPhone = /^[0-9]{10}$/.test(trimmed);
  const isUsername = /^[a-zA-Z0-9_. ]{3,20}$/.test(trimmed);

  return isEmail || isPhone || isUsername;
};

export const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, "Email, username or mobile number is required")
    .refine(isValidIdentifier, {
      message: "Enter a valid email, username or mobile number",
    }),

  password: z.string().min(1, "Password is required"),
});


export type LoginSchema  = z.infer<typeof loginSchema>