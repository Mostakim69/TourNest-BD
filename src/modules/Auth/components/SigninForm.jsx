import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import SocialLogin from "./SocialLogin";
import useAuth from "../../../hooks/useAuth";
import { swalSuccessToast } from "../../shared/ui/swalToast";

const SigninForm = () => {
  const { signinUser } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      await signinUser(email, password);
      swalSuccessToast({ text: "You have signed in!" });
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 2000);
    } catch (err) {
      setErrorMsg(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-gradient-to-br from-[#0e0c2b] via-[#1a1843] to-[#121229] 
                 rounded-2xl border border-[#2f2b5c] p-6 shadow-md
                 backdrop-blur-md"
    >
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-4">
        Sign In Now
      </h2>

      <fieldset className="space-y-4">
        {errorMsg && (
          <p className="text-sm text-red-500 text-center">{errorMsg}</p>
        )}

        <div>
          <label htmlFor="email" className="text-sm text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Write your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-[#1e1c3a] text-gray-200 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Write your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-[#1e1c3a] text-gray-200 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
        </div>

        <div className="text-right">
          <Link
            to="/auth/forgot-pass"
            className="text-sm text-blue-400 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-full bg-blue-600 hover:bg-blue-700 
                     text-white font-semibold transition-all duration-200 
                     hover:shadow-md hover:shadow-blue-500/30 pulse-glow
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p className="text-sm text-center text-gray-400 mt-2">
          Not a member?{" "}
          <Link to="/auth/signup" className="text-blue-400 cursor-pointer hover:underline">
            Sign Up
          </Link>
        </p>

        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SigninForm;
