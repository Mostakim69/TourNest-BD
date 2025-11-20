import { Link } from "react-router";
import { Home, Map, Users, Info, LayoutDashboard } from "lucide-react"; // <-- icons import

export const navItems = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "All Trips",
    path: "/all-trips",
    icon: Map,
  },
  {
    name: "Community",
    path: "/community",
    icon: Users,
  },
  {
    name: "About Us",
    path: "/about-us",
    icon: Info,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
];

const navbarLinks = (user) => {
  const filteredItems = user
    ? navItems
    : navItems.filter((item) => item.name !== "Dashboard");

  return filteredItems.map((item) => {
    const Icon = item.icon;

    return (
      <li key={item.path}>
        <Link
          to={item.path}
          className="flex items-center gap-2 hover:text-[#00FF9C] transition-all"
        >
          <Icon size={18} /> {/* icon */}
          {item.name}
        </Link>
      </li>
    );
  });
};

export default navbarLinks;
