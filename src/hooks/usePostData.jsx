import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";

export const darkSwal = Swal.mixin({
  background: "#111827",
  color: "#E5E7EB",
  confirmButtonColor: "#6366F1",
  cancelButtonColor: "#EF4444",
  customClass: {
    popup: "glow-border ",
  },
});

const usePostData = (customHandlers = {}) => {
  const axiosSecure = useAxiosSecure();

  const {
    mutateAsync: postData,
    isPending,
    isSuccess,
    isError,
    error,
    data,
    reset,
  } = useMutation({
    mutationFn: async ({ url, payload }) => {
      const res = await axiosSecure.post(url, payload);
      return res.data;
    },
    onError: (err) => {
      if (customHandlers?.onError) {
        customHandlers.onError(err);
      } else {
        darkSwal.fire({
          icon: "error",
          title: "Failed to Submit",
          text: err?.response?.data?.message || err.message,
        });
      }
    },
    onSuccess: (data) => {
      if (customHandlers?.onSuccess) {
        customHandlers.onSuccess(data);
      } else {
        darkSwal.fire({
          icon: "success",
          title: "Submitted!",
          text: data?.message || "Successfully posted!",
        });
      }
    },
  });

  return { postData, isPending, isSuccess, isError, error, data, reset };
};

export default usePostData;
