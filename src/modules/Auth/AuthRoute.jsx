import { Signin, SignUp } from "../Auth";
import AuthLayout from "../Auth/AuthLayout";
import ForgotPassword from "../Auth/pages/ForgotPass";
const AuthRoute = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    {
      path: "signin",
      Component: Signin,
    },

    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "forgot-pass",
      Component: ForgotPassword,
    },
  ],
};

export default AuthRoute;
