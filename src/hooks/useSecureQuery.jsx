import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSecureQuery = (queryKey, url, config = {}) => {
  const axiosSecure = useAxiosSecure();

  return useQuery({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: async () => {
      const res = await axiosSecure.get(url, {
        params: config?.params || {}, // support query ?param=value
      });
      return res.data;
    },
    ...config,
  });
};

export default useSecureQuery;
