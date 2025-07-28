import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../shared/ui";
import SocialLogin from "./SocialLogin";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../hooks/usePostData";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase.init";

const SignUpForm = () => {
  const { signupUser } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, confirmPassword, photoURL } = data;

    if (password !== confirmPassword) {
      return darkSwal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match!",
      });
    }

    try {
      const res = await signupUser(email, password);
      console.log(res, "SignUpForm.jsx", 35);
      // ✅ Directly update Firebase user profile
      await updateProfile(auth?.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      // Save to database
      const newUser = {
        name,
        email,
        photo: photoURL,
      };

      await axiosSecure.post("/users", newUser);

      darkSwal.fire({
        icon: "success",
        title: "Account Created",
        text: "Welcome to TourNest BD!",
        timer: 2000,
        showConfirmButton: false,
      });

      reset();
      navigate("/");
    } catch (err) {
      darkSwal.fire({
        icon: "error",
        title: "Signup Failed",
        text: err.message || "Something went wrong",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1  bg-base-200  border rounded-box w-fit p-4
      border-[#5f5f9f] rounded-2xl shadow-xl glow-border pulse-glow"
    >
      <h2 className="text-gray-500 text-2xl text-center font-bold">
        Sign Up Now
      </h2>

      <fieldset className="w-xs p-4 fieldset">
        <Input
          label="Name"
          placeholder="Write your name"
          className="mb-2 w-full sm:min-w-[400px] input-info rounded-full"
          {...register("name", { required: "Name is required" })}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Write your email"
          className="mb-2 w-full sm:min-w-[400px] input-info rounded-full"
          {...register("email", { required: "Email is required" })}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Write your password"
          className="mb-2 w-full sm:min-w-[400px] rounded-full input-info"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters required",
            },
          })}
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Write your password again"
          className="mb-2 w-full sm:min-w-[400px] rounded-full input-info"
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (val) =>
              val === watch("password") || "Passwords do not match",
          })}
        />
        <Input
          type="text"
          label="Photo URL"
          placeholder="Provide your photo URL"
          className="w-full sm:min-w-[400px] rounded-full input-info"
          {...register("photoURL", { required: "Photo URL is required" })}
        />

        <Button className="btn-block btn-info rounded-full mt-3" variant="info">
          Sign Up
        </Button>
        <p className="mt-3 text-sm text-center">
          Already a member?{" "}
          <Link to="/auth/signin" className="text-blue-400 underline">
            Sign In
          </Link>
        </p>
        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SignUpForm;
