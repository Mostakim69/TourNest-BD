import { authLottie } from "../../../animation";
import LottieAnimation from "../../../animation/LottieAnimation";
import SignUpForm from "../components/SignUpForm";
import UseHelmet from "../../../hooks/useHelmet";
import { motion } from "framer-motion";
import {
  bottomToTop,
  leftToRight,
  rightToLeft,
} from "../../../animation/motion";

const SignUp = () => {
  return (
    <div className="min-h-[85vh] mt-10 px-4 py-12 rounded-2xl bg-gradient-to-br from-[#0e0e1c] via-[#11111f] to-[#0e0e1c] shadow-xl border border-[#1d1d2f] relative z-10">
      <UseHelmet title="Sign up - TourNest BD" />

      <motion.div className="max-w-xl mx-auto text-center" {...bottomToTop}>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
          TourNest BD empowers your travel journey.
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Sign up to explore exciting destinations, connect with local guides,
          and experience Bangladesh like never before.
        </p>
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-10 mt-10">
        {/* Left side animation */}
        <motion.div
          className="w-full max-w-md bg-[#141423] rounded-2xl border border-[#262637] p-5 shadow hover:shadow-xl hover:glow-border transition-all duration-300"
          {...rightToLeft}
        >
          <LottieAnimation anime={authLottie} />
        </motion.div>

        {/* Right side form */}
        <motion.div
          className=" hover:shadow-lg hover:glow-border"
          {...leftToRight}
        >
          <SignUpForm />
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
