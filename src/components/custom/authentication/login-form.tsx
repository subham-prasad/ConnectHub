import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "@/schema/auth/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "@/api/auth.api";
import { toast } from "sonner";
import { setAccessToken, setRefreshToken } from "@/utils/localStorage";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await loginUser({
        username: data.identifier,
        password: data.password,
      });

      toast.success(response.message);

      navigate("/")

      // console.log(response.data.accessToken);
      // console.log(response.data.refreshToken);
      // console.log(response.data.user);

      // navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <Card className="w-full max-w-md p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Welcome Back</h1>

          <p className="mt-2 text-sm text-slate-500">
            Login to continue to ConnectHub.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">
                {" "}
                Email / Username / Mobile
              </FieldLabel>

              <Input
                id="identifier"
                type="text"
                placeholder="Enter your username or email or MobileNo"
                {...register("identifier")}
              />

              <FieldDescription>
                Enter your registered username or email.
              </FieldDescription>

              {errors.identifier && (
                <p className="text-sm text-red-500">
                  {errors.identifier.message}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>

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

              <FieldDescription>Enter your account password.</FieldDescription>

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </Field>
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Button className="w-full" type="submit">
              Login
            </Button>

            <p className="text-center text-sm text-slate-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </FieldGroup>
        </form>
      </Card>
    </div>
  );
}
