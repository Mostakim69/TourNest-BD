import { Link } from "react-router";

export const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Trips",
    path: "/all-trips",
  },

  {
    name: "Community",
    path: "/community",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
];

const navbarLinks = () => {
  return navItems.map((item) => {
    return (
      <li key={item.path}>
        <Link to={item.path}>{item.name}</Link>
      </li>
    );
  });
};

export default navbarLinks;
