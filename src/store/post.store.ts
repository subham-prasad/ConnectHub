import { getAllPostsData, getPostById } from "@/api/post.api";

import type { Post, PostApiResponse } from "@/types/post.types";
import { create } from "zustand";

interface PostsStoreInterface {
  postData: PostApiResponse | null;
  postById: Post | null;
  getAllPosts: () => Promise<void>;
  callPostById: (id: string) => Promise<Post>;
}

const PostsStore = create<PostsStoreInterface>((set) => ({
  postData: null,
  postById: null,

  getAllPosts: async () => {
    const allPosts = await getAllPostsData();

    set(() => ({ postData: allPosts.data }));
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
