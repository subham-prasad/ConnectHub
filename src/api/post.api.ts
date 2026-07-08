import type { ApiResponse } from "@/types/global-types";
import type {
  CreatePostPayload,
  PostApiResponse,
  UploadedImage,
} from "@/types/post.types";
import Axios from "@/lib/axios";

export const getAllPostsData = async () => {
  try {
    const response = await Axios.get<ApiResponse<PostApiResponse>>(
      "/social-media/posts",
      {
        params: {
          page: 1,
          limit: 20,
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

  formData.append("content", content);

  images.forEach((image) => {
    formData.append("images", image.file);
  });

  tags.forEach((tag, index) => {
    formData.append(`tags[${index}]`, tag);
  });

  // for (const [key, value] of formData.entries()) {
  //   console.log(key, ":", value);
  // }

  try {
    const response = await Axios.post<ApiResponse<PostApiResponse>>(
      "/social-media/posts",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    // console.log(response.data)

    return response.data;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export const getMyPosts = async () => {
  try {
    const response = await Axios.get<ApiResponse<PostApiResponse>>(
      "social-media/posts/get/my",
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
