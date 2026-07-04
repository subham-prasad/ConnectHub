import { MoreOutlinedIcon } from '@/components/icons/ant-design-more-outlined';
import { Bookmark, Forward, Heart, MessageCircle, UserIcon } from 'lucide-react';
import React from 'react'
import MyPic from "@/assets/MyPic.jpeg";
import type { Post } from '@/types/postCard.types';


interface PostCardProds {
  post: Post;
}

const PostCard = ({ post }: PostCardProds) => {
  return (
    <div className=" w-7/8 ">
      <div className="profile-card mx-auto my-6 w-[600px] rounded-lg p-4 ">
        <div className="post-card-top flex flex-row h-1/12 justify-between align-middle pt-2 ">
          <div className="post-card-logoandusername flex flex-row px-2">
            <UserIcon
              className="post-card-logo p-1 border-2 border-blue-300 rounded-full"
              size={30}
            />
            <h3 className="post-card-username px-2  font-semibold">{`${post.userName}`}</h3>
          </div>
          <div className=" post-card-options ">
            <MoreOutlinedIcon
              size={30}
              strokeWidth={64}
              className="text-gray-900"
            />
          </div>
        </div>
        <div className="post-image mt-2 h-[500px] overflow-hidden rounded-lg">
          <img
            src={MyPic}
            alt="Post"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="post-card-bottom flex flex-row h-1/12 mt-1 justify-between">
          <div className="flex flex-row">
            <div className="flex flex-row p-2 h-full ">
              <Heart />
              <span className="px-1">{`${post?.likes}`}</span>
            </div>
            <div className="flex flex-row p-2 h-full ">
              <MessageCircle />
              <span className="px-1">{`${post?.comments}`}</span>
            </div>
            <div className="flex flex-row p-2 h-full ">
              <Forward />
              <span className="px-1">{`${post?.shares}`}</span>
            </div>
          </div>
          <div className="flex flex-row p-2 h-full ">
            <Bookmark />
            <span className="px-1">{`${post?.saves}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard