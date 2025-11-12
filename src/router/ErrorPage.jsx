import { useNavigate, useRouteError } from "react-router";
import { notfound3 } from "../assets/images";
import { CommonFooter, Navbar } from "../modules/shared/Layout";
import { motion } from "framer-motion";

const Errorpage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="flex justify-center items-center min-h-[90vh] py-5 px-4 bg-[#0f172a] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl w-full text-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-purple-600 rounded-3xl shadow-[0_0_20px_#7c3aed66]   p-8  space-y-6"
        >
          <h1 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-sky-400 drop-shadow-lg">
            🚨 Oops! Something Went Wrong
          </h1>

          <p className="text-lg text-gray-300">
            {error?.statusText || error?.message || "Unknown error occurred."}
          </p>

          <motion.img
            src={notfound3}
            alt="404 Error"
            className="w-full max-w-xs sm:max-w-sm mx-auto rounded-xl drop-shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          />
          <div className="flex flex-col sm:flex-row gap-4 pt-6  max-w-[490px] mx-auto">
            <button
              onClick={() => navigate("/")}
              className="flex-1 btn btn-accent rounded-full bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold shadow-lg hover:from-sky-400 hover:to-purple-500 transition-all duration-300"
            >
              🏠 Go Home
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex-1 btn rounded-full bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold shadow-inner hover:from-gray-500 hover:to-gray-700 transition-all duration-300"
            >
              🔙 Go Back
            </button>
          </div>

          <p className="pt-4 text-sm text-gray-400">
            This page doesn’t exist or the server is having a moment.
            <br />
            If the problem persists, please contact support.
          </p>
        </motion.div>
      </main>

      <CommonFooter />
    </>
  );
};

export default Errorpage;
