import { useEffect } from "react";
import SideBar from "../sidebar/SideBar";
import MyPostStore from "@/store/mypost.store";
import ProfileStore from "@/store/profile.store";
import SmallPostCard from "../Post/SmallPostCard";
import myPic from "@/assets/MyPic.jpeg";
import PostModal from "../PostModal/PostModal";
6


const Profile = () => {
  const myPosts = MyPostStore((state) => state.myPosts);

  const getMyPosts = MyPostStore((state) => state.getMyPosts);

  const myProfile = ProfileStore((state) => state.myProfile);
  const getMyProfile = ProfileStore((state) => state.getMyProfile);

  useEffect(() => {
    getMyPosts();


  }, [getMyPosts]);

  useEffect(() => {
    getMyProfile();


  }, [getMyProfile]);

  return (
    <div className="flex">
      <SideBar />
      <div className="p-3 pl-6 flex flex-col flex-1 m-2 border border-amber-400">
        <div className="flex flex-row p-2 ">
          <img
            className=" my-proflie-pic w-60 h-60 rounded-full object-cover border-4 border-[#12E047]"
            src={myProfile?.account?.avatar?.url || myPic}
            alt="Profile"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = myPic;
            }}
          />
          <div className=" pl-4  flex flex-col">
            <span className="userName  font-semibold text-3xl">
              {myProfile?.account?.username}
            </span>

            <span className="Name pt-5 pl-8 font-light text-2xl ">{`${myProfile?.firstName} ${myProfile?.lastName}`}</span>

            <div className="profile-stats pt-2 flex flex-row">
              <div className="profile-stats-followers flex flex-row">
                <span className="pl-1 font-bold">{`${myProfile?.followersCount}`}</span>
                <span className="pl-2">{`Followers`}</span>
              </div>
              <div className="profile-stats-following flex flex-row">
                <span className="pl-1 font-bold">{`${myProfile?.followingCount}`}</span>
                <span className="pl-2">{`Following`}</span>
              </div>
            </div>

            <div>{myProfile?.bio}</div>
            <div> This will be used for edit profile section</div>
          </div>
        </div>
        <div className=" grid grid-cols-3 p-3 ">
          {(myPosts?.posts?.length ?? 0) > 0 &&
            myPosts?.posts.map((post, id) => (
              <SmallPostCard post={post} id={id} />
            ))}
        </div>
      </div>

    </div>
  );
};

export default Profile;
