import { motion } from "motion/react";
import { Link } from "react-router";
import { Input } from "../../shared/ui";
import { useMediaQuery } from "react-responsive";
import { animate } from "motion";
import { leftToRight, rightToLeft } from "../../../animation/motion";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4 gap-15 max-lg:flex-col-reverse">
      <motion.div className="flex-1 max-w-[400px]" {...leftToRight}>
        <img
          className="rounded-lg shadow-lg"
          src="https://images.deepai.org/art-image/3a37098281184deeb6636ac5c7b47257/a-calm-and-hopeful-scene-of-a-person-sitting-at-a-des.jpg"
        />
      </motion.div>
      <motion.div
        className="flex justify-center  rounded py-7 px-2"
        {...rightToLeft}
      >
        <form className="flex-1 card w-full max-w-sm h-fit hadow-sm bg-gray-50 sm:p-8 max-sm:p-4 ">
          <h2 className=" text-2xl max-sm:text-xl font-semibold mb-4 text-center">
            Forgot Password?
          </h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          {/* Email Input Field */}
          <Input
            label="Email"
            // In a real component, these would be connected to state:
            // value={''}
            // onChange={() => {}}
            // error={''}
            required
          />

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary"
              // In a real component, this would be disabled based on loading state:
              // disabled={false}
            >
              Send Reset Link
            </button>
          </div>

          {/* Back to Sign In Link */}
          <p className="text-center mt-6 text-sm">
            Remember your password?{" "}
            {/* Use Link component if you are using React Router */}
            {/* <Link to="/signin" className="link link-primary">Sign In</Link> */}
            <Link to="/auth/signin" className="link link-primary">
              Sign In
            </Link>
            {/* Fallback if not using Link */}
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
