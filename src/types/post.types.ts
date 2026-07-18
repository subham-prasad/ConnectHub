import type { account, asset, image } from "./global-types";








interface owner {
  _id: string;
  coverImage: image;
  fullName: string;
  lastName: string;
  userName: string;
  bio: string;
  avatar: string;
  // dob: string;
  // location: string;
  // countryCode: string;
  // phoneNumber: string;
  // owner: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
  account: Omit<account, "isEmailVerified">;
}


export interface Post {
  _id: string;
  captions: string;
  hashtags: string[];
  asset: asset[];
  owner: owner;
  createdAt: string;
  updatedAt: string;
  comments: number;
  likes: number;
  isLiked: boolean;
  isBookmarked: boolean;
}

export interface PostApiResponse {
  posts: Post[];
  totalPosts: number;
  limit: number;
  page: number;
  totalPages: number;
  serialNumberStartFrom: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage?: number | null;
  nextPage?: number | null;
}

export type UploadedImage = {
  file: File;
  preview: string;
};


export interface CreatePostPayload {
  content: string;
  images: UploadedImage[];
  tags: string[];
}
