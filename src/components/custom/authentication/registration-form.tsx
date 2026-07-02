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

interface Inputs {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
  });

  const watchFirstName = watch("firstName");

  const onSubmit = (data: Inputs) => {
    console.log(data);
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

              <Input
                {...register("firstName", {
                  required: "First name is required",
                })}
              />

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

              <Input
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
              />

              {errors.lastName && (
                <p className="text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel>Username / Email</FieldLabel>

              <Input
                type="text"
                {...register("username", {
                  required: "Username is required",
                })}
              />

              <FieldDescription>We'll never share your email.</FieldDescription>

              {errors.username && (
                <p className="text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel>Password</FieldLabel>

              <Input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters",
                  },
                })}
              />

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
