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
          color: ["#ff5733", "#33ff33", "#8a33ff", "#ce9733"],
          transition: { duration: 9, repeat: Infinity },
        }}
      >
        <img src="https://i.postimg.cc/mDZvzcKn/add5bd76e80a208f85d556937ebe8abe.jpg" alt="logo" className='h-6 rounded-full md:h-7' />
        <span className="hidden md:inline-block text-xl font-bold ml-2">TourNest BD</span>
      </motion.button>
    </div>
  );
};

export default Brand;
