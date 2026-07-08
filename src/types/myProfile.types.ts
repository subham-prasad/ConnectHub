import type { account, image } from "./global-types";

export  interface myProfile {
  __v: number;
  _id: string;
  account: account;
  bio: string;
  countryCode: string;
  coverImage: image;
  createdAt: string;
  dob: string;
  firstName: string;
  followersCount: number;
  followingCount: number;
  isFollowing: number;
  lastName: number;
  location: string;
  owner: string;
  phoneNumber: string;
  updatedAt: string;


  
}


