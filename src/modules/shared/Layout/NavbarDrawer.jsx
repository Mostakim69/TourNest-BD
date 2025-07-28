import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import SidebarLink from "./SidebarLink";
import { adminLinks, guideLinks, touristLinks } from "./sidebarLinks";
import useUserRole from "../../../hooks/useUserRole";

const NavbarDrawer = () => {
  const { role } = useUserRole(); // example: { role: 'tourist' }

  // const role = "admin";
  // const role = "tourist";
  // const role = "tour-guide";
  const location = useLocation();

  const links =
    role === "admin"
      ? adminLinks
      : role === "tour-guide"
        ? guideLinks
        : touristLinks;

  return (
    <div className="drawer lg:drawer-open text-gray-200">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Top Navbar */}
      <div className="drawer-content flex flex-col">
        <div className="w-full p-4 border-b bg-gray-700 flex justify-between items-center shadow-lg shadow-indigo-800/20 sticky top-0 z-40">
          <label
            htmlFor="my-drawer-3"
            className="btn btn-sm bg-indigo-700 text-white lg:hidden border border-indigo-500 hover:bg-indigo-600"
          >
            ☰ Menu
          </label>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold tracking-wider text-indigo-400 animate-pulse"
          >
            Dashboard
          </motion.h1>
        </div>

        {/* Page content */}
        <div
          className="min-h-[60vh] p-4"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50" data-aos="fade-down-right">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />
        <ul className="menu p-4 w-80 min-h-full bg-gray-700 border-r border-indigo-800 space-y-3 overflow-y-auto">
          {/* Home Link */}
          <li data-aos="fade-right" data-aos-delay="100">
            <SidebarLink
              to="/"
              text="Home"
              active={location.pathname === "/"}
            />
          </li>

          {/* Role-based Links */}
          {links.map((link, i) => (
            <li
              key={link.path}
              data-aos="fade-right"
              data-aos-delay={150 + i * 70}
            >
              <SidebarLink
                to={link.path}
                text={link.name}
                active={location.pathname === link.path}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
