// src/hooks/useFetchData.jsx
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useFetchData = (endpoint, query = {}) => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(endpoint, {
          params: query,
          signal: controller.signal,
        });
        setData(res.data?.data);
      } catch (err) {
        if (err.code !== "ERR_CANCELED") {
          console.error("Fetch error:", err);
        }
      }  finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [endpoint, JSON.stringify(query), axiosSecure]);

  return { data, loading };
};

export default useFetchData;
