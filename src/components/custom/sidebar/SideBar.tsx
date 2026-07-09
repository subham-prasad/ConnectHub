
import { Bell, HomeIcon, SquarePlusIcon, MessageCircle,User } from "lucide-react";
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
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
];

const SideBar = () => {
  return (
    <aside className="w-64 h-screen sticky top-0 flex-shrink-0 border-r bg-white px-2 py-10">
      {sidebarItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center rounded-lg p-4 hover:bg-gray-100"
          >
            <Icon />
            <span className="pl-2 font-semibold">{item.title}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default SideBar;


