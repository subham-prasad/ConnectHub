import type { ApiResponse } from "@/types/global-types";
import type {
  CreatePostPayload,
  Post,
  PostApiResponse,
  UploadedImage,
} from "@/types/post.types";
import Axios from "@/lib/axios";

export const getAllPostsData = async (

  page: number=1,
  limit: number=20
) => {
  try {
    const response = await Axios.get<ApiResponse<PostApiResponse>>(
      "/post/get-all-posts",
      {
        params: {
          page,
          limit,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const createPost = async ({
  content,
  images,
  tags,
}: CreatePostPayload) => {
  const formData = new FormData();

  formData.append("captions", content);

  images.forEach((image) => {
    formData.append("photos", image.file);
  });

  tags.forEach((tag, index) => {
    formData.append(`hashtags[${index}]`, tag);
  });


  try {
    const response = await Axios.post<ApiResponse<PostApiResponse>>(
      "/post/create-post",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );



    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const getMyPosts = async () => {
  try {
    const response = await Axios.get<ApiResponse<PostApiResponse>>(
      "/post/get-my-posts",
      {
        params: {
          page: 1,
          limit: 20,
        },
      },
    );

    return response.data
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};


export const getPostById = async (id: string) => {
  
  try {
    const response = await Axios.get<ApiResponse<Post>>(
      `social-media/posts/${id}`,
    );

    return response.data
  } catch (error: any) {
    throw(error)
  }
}