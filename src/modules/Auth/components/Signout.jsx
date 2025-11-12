import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Signout = ({ children }) => {
  const { signoutUser } = useAuth();

  const handleSignout = async () => {
    // Step 1: Ask confirmation
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be signed out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00BFFF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign me out!",
      // background: "#1a1a2e",
      
    });

    // Step 2: Only sign out if confirmed
    if (result.isConfirmed) {
      await signoutUser();

      // Step 3: Show success toast
      Swal.fire({
        title: "Signed out successfully!",
        text: "You have been logged out of your account.",
        icon: "success",
        confirmButtonColor: "#00BFFF",
        // background: "#1a1a2e",
        // color: "#00FF9C",
      });
    }
  };

  return (
    <div onClick={handleSignout}>
      {children || (
        <button className="btn bg-[#00BFFF] cursor-pointer text-black font-semibold">
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Signout;
