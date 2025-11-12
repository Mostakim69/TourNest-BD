import { Link } from "react-router";
import { motion } from "framer-motion";

const SidebarLink = ({ to, text, active }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 0 15px rgba(99,102,241,0.7)",
        transition: { duration: 0.4 },
      }}
    >
      <Link
        to={to}
        className={`  px-4 py-2 rounded-md font-semibold text-center transition-all duration-300 group ${
          active
            ? "bg-indigo-700 text-white border border-indigo-400 shadow-lg animate-pulse"
            : "bg-gray-800 text-indigo-300 hover:bg-indigo-700 hover:text-white border border-transparent hover:border-indigo-500"
        }`}
      >
        <span className="relative">
          {text}
          {/* Lighting dot effect for active */}
          {active && (
            <span className="absolute -top-2 -right-2 h-2 w-2 bg-indigo-400 rounded-full animate-ping" />
          )}
        </span>
      </Link>
    </motion.div>
  );
};

export default SidebarLink;
