import { motion } from "motion/react";
import { useNavigate } from "react-router";

const Brand = () => {
  const navigate = useNavigate();

  return (
    <div>
      <motion.button
        onClick={() => navigate("/")}
        className="text-xl ml-2 flex items-center gap-3 cursor-pointer font-bold"
        animate={{
          color: ["#000000", "#ffffff", "#3380ff"], // black, white, blue
          transition: { duration: 6, repeat: Infinity }, // duration 6 sec, repeat infinitely
        }}
      >
        <img
          src="https://i.postimg.cc/mDZvzcKn/add5bd76e80a208f85d556937ebe8abe.jpg"
          alt="logo"
          className="h-6 rounded-full md:h-7"
        />
        <span className="hidden md:inline-block text-xl font-bold ml-2">
          TourNest BD
        </span>
      </motion.button>
    </div>
  );
};

export default Brand;
