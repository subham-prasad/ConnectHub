export interface User {
  __v: number;
  _id: string;
  email: string;
  password: string;
  avatar: string;
  createdAt: string;
  loginType: string;
  updatedAt: string;
  userName: string;
  followers: Array<number>;
  following: Array<number>;
  post: Array<number>;
}

// interface Avatar {
//   _id: string;
//   localPath: string;
//   url: string;
// }




export interface LoginUserResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}