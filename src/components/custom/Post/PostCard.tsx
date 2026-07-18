import { MoreOutlinedIcon } from "@/components/icons/ant-design-more-outlined";
import {
  Bookmark,
  Forward,
  Heart,
  MessageCircle,
  UserIcon,
} from "lucide-react";

import type { Post } from "@/types/post.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface PostCardProds {
  post: Post;
}

const PostCard = ({ post }: PostCardProds) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);

  // console.log("This is the post:",post)

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className="flex justify-center ">
      <div className="profile-card mx-auto my-6 w-[600px] rounded-lg p-4 ">
        <div className="post-card-top flex flex-row h-1/12 justify-between align-middle pt-2 ">
          <div className="post-card-logoandusername flex flex-row px-2">
            <img
              src={post.owner.avatar}
              alt={post.owner.userName}
              className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-gray-200"
            />
            <h3 className="post-card-username px-2 pt-2 font-semibold">{`${post?.owner?.userName}`}</h3>
          </div>
          <div className=" post-card-options ">
            <MoreOutlinedIcon
              size={30}
              strokeWidth={64}
              className="text-gray-900"
            />
          </div>
        </div>
        <div className="post-image mt-2 rounded-lg overflow-hidden">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {post.asset.map((image) => (
                <CarouselItem key={image._id}>
                  <img
                    src={image.url}
                    alt="Post"
                    className="h-[500px] w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-3" />
            <CarouselNext className="right-3" />
          </Carousel>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {post.asset.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  current === index ? "bg-white w-6" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-2 text-sm">
          <p className={expanded ? "" : "line-clamp-2"}>
            {post.captions}
            {post.hashtags.map((tag) => (
              <span key={tag} className="font-semibold text-blue-600">
                #{tag}{" "}
              </span>
            ))}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-500 hover:text-black"
          >
            {expanded ? "Show less" : "...more"}
          </button>
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
              <span className="px-1">{`0`}</span>
            </div>
          </div>
          <div className="flex flex-row p-2 h-full ">
            <Bookmark />
            <span className="px-1">{`0`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
