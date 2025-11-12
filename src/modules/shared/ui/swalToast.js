import Swal from "sweetalert2";

export const swalSuccessToast = ({
  title = "Success!",
  text = "Successfully done!",
  toast = true,
  timer = 2000,
  background = "#0f172a",
  color = "#fff",
  showConfirmButton = false,
  icon = "success",
} = {}) => {
  Swal.fire({
    icon,
    title,
    text,
    toast,
    timer,
    background,
    color,
    showConfirmButton,
  });
};

export const swalErrorToast = ({
  title = "Oops!",
  text = "Something went wrong.",
  toast = true,
  timer = 2000,
  background = "#1e293b", // Slightly different dark shade
  color = "#fff",
  showConfirmButton = true,
  icon = "error",
} = {}) => {
  Swal.fire({
    icon,
    title,
    text,
    toast,
    timer,
    background,
    color,
    showConfirmButton,
  });
};