import type { Post } from "@/types/post.types";
import PostCard from "./PostCard";

import PostsStore from "@/store/post.store";
import { useEffect } from "react";



const AllPosts = () => {
  // const getAllPosts: Post = PostsStore((state) => {state.posts})

  const postData = PostsStore((state) => state.postData);
  const getAllPosts = PostsStore((state) => state.getAllPosts);
  const currentPage = PostsStore((state) => state.currentPage);
  const loading = PostsStore((state) => state.loading);

  const allPosts = postData?.posts ?? [];
  const totalPosts = postData?.totalPosts ?? 0;
  const totalPages = postData?.totalPages ?? 0;

console.log("API Response:", allPosts);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <div className="flex-1 overflow-y-auto">
      {/* <PostCard post={DummyPostCardsData[0]} /> */}

      {allPosts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}

      <div className="flex justify-center my-6">
        <button disabled={loading} onClick={() => getAllPosts(currentPage + 1)}>
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default AllPosts;
