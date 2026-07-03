import Axios from "@/lib/axios";
import { type ApiResponse } from "@/types/global-types";
import { toast } from "sonner";

interface RegisterUser {
  __v: number;
  _id: string;
  email: string;
  password: string;
  role: string;
  avatar: {
    _id: string;
    localPath: string;
    url: string;
  };
  createdAt: string;
  isEmailVerified: boolean;
  loginType: string;
  updatedAt: string;
  username: string;
}

interface LoginUser {
  accessToken: string;
  refreshToken: string;
  user: RegisterUser;
}

// interface UserRegistrationRes {
//   data: User;
//   statusCode: number;
//   success: boolean;
//   message: string;
// }

export interface RegisteredUserInternface {
  email: string;
  username: string;
  password: string;
  role: "ADMIN" | "USER";
}

export interface LoginUserInternface {
  username: string;
  password: string;
}

export const registerUser = async (userData: RegisteredUserInternface) => {
  try {
    const response = await Axios.post<ApiResponse<RegisterUser>>(
      "/users/register",
      userData,
    );

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const loginUser = async (userData: LoginUserInternface) => {
  try {
    const response = await Axios.post<ApiResponse<LoginUser>>(
      "/users/login",
      userData,
    );

    return response.data;
  } catch (error: any) {
    toast.error("Invalid username or password");

    console.log(error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await Axios.get<ApiResponse<RegisterUser>>(
      "/users/current-users",
    );

    return response.data;
  } catch (error) {
    toast.error("Invalid username or password");

    console.log(error);
    throw error;
  }
};
