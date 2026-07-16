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
import { Link, useNavigate } from "react-router";
import {
  registrationSchema,
  type RegistrationForm,
} from "@/schema/auth/registration.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { registerUser } from "@/api/auth.api";
import { toast } from "sonner";

// type Inputs = z.infer<typeof registrationSchema>;

export const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationForm>({
    defaultValues: {
      userName: "",
      fullName: "",
      password: "",
      email: "",
      bio: "",
    },
    resolver: zodResolver(registrationSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState<File | null>(null);
  const watchFirstName = watch("fullName");

  const navigate = useNavigate();

  const onSubmit = async (data: RegistrationForm) => {
    const formData = new FormData();

    // console.log("user")

    formData.append("userName", data.userName);
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (data.bio) {
      formData.append("bio", data.bio);
    }

    if (avatar) {
      formData.append("avatar", avatar);
    }
    const RegisteredUser = await registerUser(formData);

    if (RegisteredUser.success) {
      toast.success(RegisteredUser.message);
      navigate("/login");
    } else toast.error(RegisteredUser.message);

    // const username = registeredUser?.data.data.name;
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
              <FieldLabel>Full Name</FieldLabel>

              <Input {...register("fullName")} />

              <FieldDescription>
                {watchFirstName || "Enter your first name"}
              </FieldDescription>

              {errors.fullName && (
                <p className="text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel>Username </FieldLabel>

              <Input type="text" {...register("userName")} />

              <FieldDescription>We'll never share your email.</FieldDescription>

              {errors.userName && (
                <p className="text-sm text-red-500">
                  {errors.userName.message}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel>Email </FieldLabel>

              <Input type="email" {...register("email")} />

              <FieldDescription>We'll never share your email.</FieldDescription>

              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}

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

            <Field>
              <FieldLabel>Profile Picture</FieldLabel>

              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setAvatar(e.target.files?.[0] ?? null);
                }}
              />
              {avatar && (
                <p className="text-sm text-slate-500">
                  Selected: {avatar.name}
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
