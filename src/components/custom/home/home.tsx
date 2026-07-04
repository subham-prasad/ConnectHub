import React from "react";
import { HomeIcon } from "@/components/icons/tabler-home";
import { SquarePlusIcon } from "@/components/icons/lucide-square-plus";
import { Bell, BellDot } from "lucide-react";

function HomeComponent() {
  return (
    <div className="border h-full border-amber-300">
      <div className=" flex flex-row h-full w-full border-8 border-black">
        <div className="mx-auto px-2 py-10 flex flex-col w-1/8 ">
          <div className="flex flex-row p-4 ">
            <HomeIcon />
            <h1 className="font-semibold pl-2">Home</h1>
          </div>

          <div className="flex flex-row p-4 ">
            <SquarePlusIcon />
            <h1 className="font-semibold pl-2">New Post</h1>
          </div>

          <div className="flex flex-row p-4">
            <Bell />
            <h1 className="font-semibold pl-2">Notifications</h1>
          </div>

        </div>

        <div className=" w-7/8 border-4 border-green-500">
          <div className=" m-6 p-4 h-11/12 w-3/5 border-4  border-blue-300">
            This is the box
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
