import React, { useEffect } from 'react'
import SideBar from '../sidebar/SideBar'
import MyPostStore from '@/store/mypost.store'
import ProfileStore from '@/store/profile.store';

const Profile=() => {


  const myPosts = MyPostStore((state) => state.myPosts);

  const getMyPosts = MyPostStore((state) => state.getMyPosts);


  const myProfile = ProfileStore((state) => state.myProfile);
  const getMyProfile = ProfileStore((state) => state.getMyProfile);

  useEffect(() => {
    getMyPosts();

    console.log(getMyPosts)
  }, [getMyPosts]);

    useEffect(() => {
      getMyProfile();

      console.log(getMyProfile);
    }, [getMyProfile]);

  return (
    <div className="flex">
      <SideBar />
      <div className="p-3 flex flex-col flex-1 m-2 border border-amber-400">
        <div className="border-2 border-pink-300">
          hi
        </div>
        <div className="border-2 border-green-300">
          This is the my Post Section
        </div>
      </div>
    </div>
  );
}

export default Profile