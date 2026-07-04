import { Bell, HomeIcon, SquarePlusIcon } from 'lucide-react';
import React from 'react'

const SideBar = () => {
  return (
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
  );
}

export default SideBar