import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import type { Post } from "@/types/post.types";
import React, { useState } from "react";
import myPic from "@/assets/MyPic.jpeg";
import { Heart, MessageCircleMore } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const PostModal = ({ post }: { post: Post }) => {


  

  return (
    <DialogContent className="h-[80vh] min-w-4xl">
      <DialogDescription className="flex flex-row gap-2">
        {/* Post image */}

        <Carousel className="h-full aspect-12/16">
          <CarouselContent className="h-full">
            {post.images.map((image) => (
              <CarouselItem key={image._id} className="basis-full h-full">
                <img className="w-full h-full object-cover" src={image.url} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-3" />
          <CarouselNext className="right-3" />
        </Carousel>

        {/* Post description */}
        <div className="w-full flex flex-col">
          <DialogHeader className="w-full  flex flex-col justify-center items-center  ">
            <h1 className="text-3xl font-bold text-black">{`${post.author.account.username}`}</h1>
            <span>
              {post.author.firstName} {post.author.lastName}
            </span>
          </DialogHeader>
          <div>
            <h3 className="text-xl">
              <span className="text-black">
                {post.author.account.username}:
              </span>{" "}
              {post?.content}
            </h3>
            <span className="text-blue-500 cursor-pointer mx-2">
              {post?.tags}
            </span>
          </div>

          <div className="flex gap-4 mt-5">
            <div className="flex gap-1.5 cursor-pointer">
              {post.isLiked ? <Heart color="red" fill="red" /> : <Heart />}
              {post?.likes}
            </div>
            <div className="flex gap-1.5 cursor-pointer">
              <MessageCircleMore />
              {post?.comments}
            </div>
          </div>
        </div>
      </DialogDescription>
    </DialogContent>
  );
};

export default PostModal;
