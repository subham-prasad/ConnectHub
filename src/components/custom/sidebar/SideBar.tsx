
import { Bell, HomeIcon, SquarePlusIcon, MessageCircle } from "lucide-react";
import { Link } from "react-router";

const sidebarItems = [
  {
    title: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    title: "New Post",
    path: "/newpost",
    icon: SquarePlusIcon,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: MessageCircle,
  },
];


const SideBar = () => {
  return (
    <div className="w-64 flex-shrink-0 px-2 py-10">
      {sidebarItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center p-4"
          >
            <Icon />
            <h1 className="font-semibold pl-2">{item.title}</h1>
          </Link>
        );
      })}

      
    </div>
  );
};

export default SideBar

