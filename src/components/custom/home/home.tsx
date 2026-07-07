
import SideBar from "../sidebar/SideBar";

import AllPosts from "../Post/AllPosts";
import PostCard from "../Post/PostCard";

function HomeComponent() {
  return (
    <div className="flex ">
      <SideBar />
      <main className="flex-1 min-w-0 overflow-y-auto">
        <AllPosts />
      </main>

    </div>
  );
}

export default HomeComponent;
