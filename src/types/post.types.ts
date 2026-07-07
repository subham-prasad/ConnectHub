


interface image {
  url: string;
  localPath: string;
  _id: string
}



interface account {
  _id: string;
  avatar: image;
  username: string;
  email: string;
}

interface author {
  _id: string;
  coverImage: image;
  firstName: string;
  lastName: string;
  bio: string;
  dob: string;
  location: string;
  countryCode: string;
  phoneNumber: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
  account: account;
}


export interface Post {
  _id: string;
  content: string;
  tags: string[];
  images: image[];
  author: author;
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
