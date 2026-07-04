
import SideBar from "../sidebar/SideBar";

import AllPosts from "../Post/AllPosts";
import PostCard from "../Post/PostCard";

function HomeComponent() {
  return (
    <div className="flex flex-row h-full w-full ">
     
        <SideBar />
        <AllPosts />

    </div>
  );
}

export default HomeComponent;
