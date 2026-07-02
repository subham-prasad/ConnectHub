import { PLATFORM_NAME } from "@/utils/global";
import { LOGO } from "@/utils/global-assets";
import { Link, NavLink } from "react-router";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 w-4/5 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LOGO}
            alt="ConnectHub Logo"
            className="h-10 w-10 object-contain"
          />

          <span className="text-xl font-bold text-blue-600">
            {PLATFORM_NAME}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Authentication */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `font-medium transition-colors ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            Login
          </NavLink>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;