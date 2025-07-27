import { motion } from "motion/react";
import { Link } from "react-router";
import { topToBottom } from "../../../animation/motion";
import useAuth from "../../../hooks/useAuth";
import Signout from "../../Auth/components/Signout";
import Brand from "../ui/Brand";
import Avatar from "../ui/Avatar";
import navbarLinks from "./navbarLinksConstant";
import DropDown from "../ui/DropDown";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <motion.nav {...topToBottom} className="navbar px-10 max-container ">
      {/* Left Section */}
      <div className="navbar-start">
        <div className="dropdown dropdown-right lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:bg-[#1a1a1a]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#00FF9C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow-xl 
            bg-[#1a1a2e] text-white rounded-xl border border-[#333] min-w-[180px] z-[999]"
          >
            {navbarLinks()}
          </ul>
        </div>
        <Brand />
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 text-white">
          {navbarLinks()}
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <DropDown>
              <Avatar />
            </DropDown>
            <Signout>
              <button className="px-4 py-2 rounded-full bg-[#00FF9C]/50 text-black font-semibold hover:scale-105 hover:shadow-[0_0_12px_#00FF9C] transition-all duration-200">
                Sign Out
              </button>
            </Signout>
          </div>
        ) : (
          <Link
            to="/auth/signin"
            className="px-4 py-2 rounded-lg bg-[#00BFFF] text-black font-semibold hover:scale-105 hover:shadow-[0_0_12px_#00BFFF] transition-all duration-200"
          >
            Sign In
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
