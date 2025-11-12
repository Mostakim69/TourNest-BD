import { motion } from "motion/react";
import { bottomToTop } from "../animation/motion";
import TypewriterText from "./TypeWriterEffect";

const PageIntro = ({
  h1 = "Welcome to tha page ____",
  p = "This  page is for you to see the details of the job you applied for",
}) => {
  return (
    <div className="mt-10">
      <motion.div className="text-center mb-10" {...bottomToTop}>
        <h1 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">
          <TypewriterText words={[h1]} />
        </h1>
        <p className="text-gray-400 mx-auto lg:w-1/2 w-3/4 text-center">{p}</p>
      </motion.div>
    </div>
  );
};

export default PageIntro;
