import { getAllPostsData } from "@/api/post.api";

import type { Post, PostApiResponse } from "@/types/post.types";
import { create } from "zustand";

interface PostsStoreInterface {
  postData: PostApiResponse | null;
  getAllPosts: () => Promise<void>;
}

const PostsStore = create<PostsStoreInterface>((set) => ({
  postData: null,
  getAllPosts: async () => {
    const allPosts = await getAllPostsData();


    set(() => ({ postData: allPosts.data }));
  },
}));

export default PostsStore;


/*
 getAllPosts: () => {
    set({
      posts: dummyPosts,
    });
*/