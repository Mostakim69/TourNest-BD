import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSecureUpdate = (url, config = {}) => {
  const axiosSecure = useAxiosSecure();

  return useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.patch(url, data, {
        params: config?.params || {}, // support optional query params
      });
      return res.data;
    },
    ...config,
  });
};

export default useSecureUpdate;
