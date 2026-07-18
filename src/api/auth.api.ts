import Axios from "@/lib/axios";
import { type ApiResponse } from "@/types/global-types";
import type { LoginUserResponse, User } from "@/types/user.types";

import { setAccessToken, setRefreshToken } from "@/utils/localStorage";

// export interface RegisteredUserInternface {
//   email: string;
//   fullName: string;
//   userName: string;
//   password: string;
//   bio?: string;
// }

export interface LoginUserInternface {
  userName: string;
  password: string;
}

// export const registerUser = async (userData: RegisteredUserInternface) => {

  
//   try {
//     const response = await Axios.post<ApiResponse<User>>(
//       "/user/register",
//       userData,
//     );

//     return response.data;
//   } catch (error: any) {
//     console.log(error);
//     throw error;
//   }
// };


export const registerUser = async(formData: FormData) => {
  try {
    const response = await Axios.post<ApiResponse<User>>(
      "/user/register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data
  } catch (error) {
        console.error(error);
        throw error;
  }
}

export const loginUser = async (userData: LoginUserInternface) => {
  try {
    const response = await Axios.post<ApiResponse<LoginUserResponse>>(
      "/user/login",
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
    const response = await Axios.post<ApiResponse<User>>("/user/getCurrentUser");

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
