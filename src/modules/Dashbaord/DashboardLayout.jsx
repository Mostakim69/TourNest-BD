import { CommonFooter } from "../shared/Layout";
import NavbarDrawer from "../shared/Layout/NavbarDrawer";

const DashboardLayout = () => {
  return (
    <div className="max-container bg-[#d5dcf0]">
      <NavbarDrawer />
      <CommonFooter />
    </div>
  );
};

export default DashboardLayout;
