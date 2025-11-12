import Swal from "sweetalert2";

const customAlert = ({
  title = "Success!",
  text = "You have successfully Submitted!",
  icon = "success",
  timer = 1500,
  showConfirmButton = false,
}) => {
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton,
    timer,
  });
};

export default customAlert;
