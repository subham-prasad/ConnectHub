import { getAllPostsData, getPostById } from "@/api/post.api";

import type { Post, PostApiResponse } from "@/types/post.types";
import { create } from "zustand";

interface PostsStoreInterface {
  postData: PostApiResponse | null;
  postById: Post | null;
  currentPage: number;
  limit: number;
  loading: boolean;
  getAllPosts: (page?: number, limit?: number) => Promise<void>;
  callPostById: (id: string) => Promise<Post>;
}

const PostsStore = create<PostsStoreInterface>((set) => ({
  postData: null,
  postById: null,
  currentPage: 1,
  limit: 20,
  loading: false,

  getAllPosts: async (page = 1, limit = 20) => {
    set({ loading: true });

    try {
      const allPosts = await getAllPostsData(page, limit);

      set((state) => ({
        currentPage: page,
        limit: limit,

        postData:
          page === 1 || !state.postData
            ? allPosts.data
            : {
                ...allPosts.data,
                posts: [...state.postData.posts, ...allPosts.data.posts],
              },
      }));
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  callPostById: async (id: string) => {
    const post = await getPostById(id);

    set(() => ({ postById: post.data }));
    return post.data;
  },
}));

export default PostsStore;

/*
 getAllPosts: () => {
    set({
      posts: dummyPosts,
    });
*/
