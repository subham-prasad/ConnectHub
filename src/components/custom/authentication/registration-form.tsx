import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import {
  registrationSchema,
  type RegistrationForm,
} from "@/schema/auth/registration.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { registerUser } from "@/api/auth.api";


// type Inputs = z.infer<typeof registrationSchema>;

export const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(registrationSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const watchFirstName = watch("firstName");

  const onSubmit = async (data: RegistrationForm) => {

    const RegisteredUser = await registerUser({
      username: `${data.firstName}${data.lastName}`,
      email: data.username,
      password: data.password,
      role: "ADMIN",
    });

    // const username = registeredUser?.data.data.name;

    console.log(RegisteredUser.message);
    console.log(RegisteredUser.statusCode);
    console.log(RegisteredUser.data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-md p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Create Account</h1>

          <p className="mt-2 text-sm text-slate-500">
            Join ConnectHub and start connecting.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <FieldGroup>
            <Field>
              <FieldLabel>First Name</FieldLabel>

              <Input {...register("firstName")} />

              <FieldDescription>
                {watchFirstName || "Enter your first name"}
              </FieldDescription>

              {errors.firstName && (
                <p className="text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel>Last Name</FieldLabel>

              <Input {...register("lastName")} />

              {errors.lastName && (
                <p className="text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel>Username / Email</FieldLabel>

              <Input type="text" {...register("username")} />

              <FieldDescription>We'll never share your email.</FieldDescription>

              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel>Password</FieldLabel>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </Field>

            <Button className="mt-3 w-full" type="submit">
              Create Account
            </Button>

            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </FieldGroup>
        </form>
      </Card>
    </div>
  );
};
