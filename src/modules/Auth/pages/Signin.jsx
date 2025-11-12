import { Link } from "react-router";
import { motion } from "framer-motion";
import SigninForm from "../components/SigninForm";
import LottieAnimation from "../../../animation/LottieAnimation";
import { authLottie } from "../../../animation";
import {
  leftToRight,
  rightToLeft,
  topToBottom,
} from "../../../animation/motion";
import UseHelmet from "../../../hooks/useHelmet";

const Signin = () => {
  return (
    <div className="min-h-[85vh] mt-10 justify-center items-center px-4 py-12  rounded-2xl shadow-xl pulse-glow">
      <UseHelmet title="Sign in" />

      {/* Heading */}
      <motion.div
        className="max-w-xl mx-auto text-center mb-10"
        {...topToBottom}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900  bg-clip-text animate-pulse drop-shadow-md">
          TourNest BD connects explorers with unforgettable journeys.
        </h2>
        <p className="mt-3 text-lg text-gray-300">
          Discover breathtaking destinations, trusted tour guides, and tailored
          travel experiences — all in one platform.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-10">
        {/* Lottie */}
        <motion.div
          className="max-w-[480px] bg-gradient-to-br from-[#1e1e3f] via-[#2e2e5e] to-[#1e1e3f] rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.015] hover:shadow-purple-500/20 glow-border"
          {...leftToRight}
        >
          <LottieAnimation anime={authLottie} />
        </motion.div>

        {/* Signin Form */}
        <motion.div
          className="max-w-[480px] w-full bg-base-10  hover:shadow-purple-500/10 transition-all duration-300"
          {...rightToLeft}
        >
          <SigninForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Signin;
