import React from "react";
import { HomeIcon } from "@/components/icons/tabler-home";
import { SquarePlusIcon } from "@/components/icons/lucide-square-plus";
import { Bell, BellDot, OptionIcon, TypeOutline, UserIcon } from "lucide-react";
import SideBar from "../sidebar/SideBar";
import { MoreOutlinedIcon } from "@/components/icons/ant-design-more-outlined";

function HomeComponent() {
  return (
    <div className="border h-[90%] w-full ">
      <div className=" flex flex-row h-full w-full border-8 border-black">
        <SideBar />
        <div className=" w-7/8 border-4 border-green-500">
          <div className="profile-card m-6 p-4 h-11/12 w-3/5 border-4  border-blue-300">
            <div className="profile-card-top flex flex-row h-1/12 justify-between align-middle pt-2 border-2 border-cyan-400 ">
              <div className="profile-card-logoandusername flex flex-row px-2">
                <UserIcon
                  className="profile-card-logo p-1 border-2 text-gray-950 border-black rounded-full"
                  size={30}
                />
                <h3 className="profile-card-username px-2  font-semibold">{`s._.u_._b._.o`}</h3>
              </div>
              <div className=" profile-card-options ">
                <MoreOutlinedIcon
                  size={30}
                  strokeWidth={64}
                  className="text-gray-900"
                />
              </div>
            </div>
            <div className="profile-image border-2 border-lime-300 h-10/12">
                <h1>This is where the image will go</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
