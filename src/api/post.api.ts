import type { ApiResponse } from "@/types/global-types";
import type { PostApiResponse } from "@/types/post.types";
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

