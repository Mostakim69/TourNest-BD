import { Github, Facebook } from "lucide-react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { darkSwal } from "../../../hooks/usePostData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useAuth(); // Make sure githubSignIn is added in useAuth.js
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const from = location?.state?.from?.pathname || "/";

  const handleSocialSignIn = async (providerFunc, providerName) => {
    if (loading) return;
    setLoading(true);
    try {
      const userCred = await providerFunc();
      const user = userCred?.user;

      await axiosSecure.post("/users", {
        name: user?.displayName || `${providerName} User`,
        email: user?.email,
        photoURL: user?.photoURL || "",
      });

      darkSwal.fire({
        position: "center",
        icon: "success",
        title: `Signed in with ${providerName}`,
        text: "You have successfully signed in",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => {
        navigate(from, { replace: true });
      }, 2000);
    } catch (err) {
      console.error(`${providerName} Sign-in failed`, err);
      darkSwal.fire("Error", `${providerName} Sign-in failed`, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mt-6">
      <div className="divider text-gray-400">Or continue with</div>
      <div className="flex max-sm:flex-wrap justify-center gap-4 mt-4">
        {/* Google */}
        <button
          onClick={() => handleSocialSignIn(googleSignIn, "Google")}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 w-full max-w-[180px] bg-white text-gray-800 border border-gray-300 rounded-full hover:shadow-md transition duration-200 disabled:opacity-50"
        >
          <svg
            aria-label="Google logo"
            width="18"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="M0 0h512v512H0z" fill="#fff" />
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              />
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              />
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              />
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              />
            </g>
          </svg>
          <span className="text-sm font-medium">Google</span>
        </button>

        {/* GitHub */}
        {/* <button
          onClick={() => handleSocialSignIn(githubSignIn, "GitHub")}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 w-full max-w-[180px] bg-neutral text-white rounded-full hover:bg-neutral-focus transition duration-200 disabled:opacity-50"
        >
          <Github size={18} />
          <span className="text-sm font-medium">GitHub</span>
        </button> */}

        {/* Facebook (Optional placeholder only) */}
        {/* <button
          disabled
          className="flex items-center gap-2 px-4 py-2 w-full max-w-[180px] bg-blue-600 text-white rounded-full cursor-not-allowed opacity-50"
        >
          <Facebook size={18} />
          <span className="text-sm font-medium">Facebook</span>
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;

