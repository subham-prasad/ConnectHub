import type { Post } from "@/types/post.types";
import PostCard from "./PostCard";

import PostsStore from "@/store/post.store";
import { useEffect } from "react";

const AllPosts = () => {
  // const getAllPosts: Post = PostsStore((state) => {state.posts})

  const posts = PostsStore((state) => state.postData);
  const getAllPosts = PostsStore((state) => state.getAllPosts);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);



  return (
    <div className="flex-1 overflow-y-auto">
     
      {/* <PostCard post={DummyPostCardsData[0]} /> */}
      
      {posts &&
        posts.posts.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
    </div>
  );
};

export default AllPosts;
