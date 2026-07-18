import React, { useEffect, useState } from "react";
import { type Post } from "@/types/post.types";
import myPic from "@/assets/MyPic.jpeg";
import { Heart, MessageCircle } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import PostModal from "../PostModal/PostModal";
import PostsStore from "@/store/post.store";

const SmallPostCard = ({ post, id }: { post: Post; id: number }) => {
  // const [openDialog,setOpenDialog] = useState<Boolean>(false)
  const [postById, setPostById] = useState<Post | null>(null);

  const callPostById = PostsStore((state) => state.callPostById);
  const fetchPostById = async () => {
    const postByIdResponse = await callPostById(post._id);
    console.log("this is the post by id Response:", postByIdResponse);
    setPostById(postByIdResponse);
  };
  // useEffect(() => {
  //   fetchPostById();
  // }, [callPostById, post._id]);

  return (
    <Dialog>
      <DialogTrigger
        asChild
        key={post._id}
        className="w-72 h-72  p-2 relative group rounded-2xl"
      >
        <button
          onClick={fetchPostById}
          className="w-72 h-72 p-2 relative group rounded-2xl "
        >
          <img
            className="w-full h-full object-cover"
            src={post.asset[0].url || myPic}
            alt={`Image ${id + 1}`}
          />
          <div className="absolute inset-2   bg-black/50   opacity-0   group-hover:opacity-100 transition-all  duration-300 flex items-center justify-center gap-6 text-white">
            <div className="flex flex-row ">
              <span>{`${post.likes}`}</span>
              <Heart size={24} fill="white" className="pl-1" />
            </div>
            <div className="flex flex-row">
              <span>{`${post.comments}`}</span>
              <MessageCircle size={24} fill="white" className="pl-1" />
            </div>
          </div>
        </button>
      </DialogTrigger>

      {postById && <PostModal post={postById} />}
    </Dialog>
  );
};

export default SmallPostCard;
