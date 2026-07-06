import Axios from "@/lib/axios";
import { type ApiResponse } from "@/types/global-types";
import type { LoginUserResponse, User } from "@/types/user.types";

import { setAccessToken, setRefreshToken } from "@/utils/localStorage";

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
    const response = await Axios.post<ApiResponse<User>>(
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
    const response = await Axios.post<ApiResponse<LoginUserResponse>>(
      "/users/login",
      userData,
    );

    setAccessToken(response.data.data.accessToken);
    setRefreshToken(response.data.data.accessToken);

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await Axios.get<ApiResponse<User>>("/users/current-user");
    // console.log("check pro or not", response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
