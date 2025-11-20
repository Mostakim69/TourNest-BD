import { NavLink } from "react-router";
import { Home, Map, Users, Info, LayoutDashboard } from "lucide-react";

export const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "All Trips", path: "/all-trips", icon: Map },
  { name: "Community", path: "/community", icon: Users },
  { name: "About Us", path: "/about-us", icon: Info },
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
];

const navbarLinks = (user) => {
  const filteredItems = user
    ? navItems
    : navItems.filter((item) => item.name !== "Dashboard");

  return filteredItems.map((item) => {
    const Icon = item.icon;

    return (
      <li key={item.path}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-2 transition-all ${
              isActive
                ? "text-blue-500 font-semibold" // Active blue color
                : "hover:text-blue-500" // Hover blue color
            }`
          }
        >
          <Icon size={18} />
          {item.name}
        </NavLink>
      </li>
    );
  });
};

export default navbarLinks;
