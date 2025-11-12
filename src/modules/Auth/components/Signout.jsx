import useAuth from "../../../hooks/useAuth";
import { swalSuccessToast } from "../../shared/ui/swalToast";

const Signout = ({ children }) => {
  const { signoutUser } = useAuth();

  const handleSignout = async () => {
    await signoutUser();

    swalSuccessToast({ text: "You have signed out!" });
  };
  return (
    <div onClick={handleSignout}>
      {children || <button className="btn">Sign Out</button>}
    </div>
  );
};

export default Signout;
