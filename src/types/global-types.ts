export type ApiResponse<T> = {
    data : T,
    message: string,
    statusCode : number,
    success : boolean,
}


export interface image {
  url: string;
  // localPath: string;
  _id: string;
}

export interface asset {
  url: string;
  // localPath: string;
  _id: string;
}



export interface account {
  _id: string;
  avatar: string;
  username: string;
  email: string;
  isEmailVerified: boolean
}