export interface User {
  __v: number;
  _id: string;
  email: string;
  password: string;
  role: UserRole;
  avatar: Avatar;
  createdAt: string;
  isEmailVerified: boolean;
  loginType: string;
  updatedAt: string;
  username: string;
}

interface Avatar {
  _id: string;
  localPath: string;
  url: string;
}

type UserRole = "ADMIN" | "USER";


export interface LoginUserResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}