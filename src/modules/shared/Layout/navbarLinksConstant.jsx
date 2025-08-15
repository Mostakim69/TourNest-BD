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

const navbarLinks = (user) => {
  // Filter navItems to exclude "Dashboard" if user is not logged in
  const filteredItems = user
    ? navItems
    : navItems.filter((item) => item.name !== "Dashboard");

  return filteredItems.map((item) => (
    <li key={item.path}>
      <Link to={item.path}>{item.name}</Link>
    </li>
  ));
};

export default navbarLinks;