import React from "react";
import PostCard from "./PostCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { dummyPosts } from "@/components/dummy/dummyCard";

const AllPosts = () => {
  return (
    <div className="flex-1 overflow-y-auto ">
      {/* <PostCard
        post={{
          userName: "Subonda",
          likes: "0",
          comments: "0",
          shares: "0",
          saves: "0",
        }}
      />
      <PostCard post={DummyPostCardsData[0]} />
       */}
      {dummyPosts &&
        dummyPosts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
    </div>
  );
};

export default AllPosts;
