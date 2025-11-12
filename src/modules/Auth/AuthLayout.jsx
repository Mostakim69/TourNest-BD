import { Outlet } from "react-router";
import AuthSidebar from "./components/AuthSidebar";

const AuthLayout = () => {
  return (
    <div className="mx-auto max-w-[1800px] p-4">
      {/* <Navbar /> */}
      <div className="xl:grid grid-cols-12 gap-10 order">
        <div className="col-span-9">
          <Outlet />
        </div>
        <div className="max-xl:hidden col-span-3 order border-red-500 mt-10 sticky top-[7rem] max-h-[calc(100vh-9rem)] overflow-y-auto">
          <AuthSidebar />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
