import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import React from "react";

// Create a single axios instance
export const axiosInstance = axios.create({
  baseURL: `https://tour-nest-bd-server-seven.vercel.app/api/v1/`,
});

// Request interceptor: dynamically set Authorization header
const setupInterceptors = (getAccessToken, logOut, navigate) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      const status = error.response?.status;
      if (status === 403) {
        navigate("/forbidden");
      } else if (status === 401) {
        logOut()
          .then(() => navigate("/login"))
          .catch(() => {});
      }
      return Promise.reject(error);
    },
  );
};

const useAxiosSecure = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  // Setup interceptors only once per hook usage
  React.useEffect(() => {
    setupInterceptors(() => user?.accessToken, logOut, navigate);
    // Cleanup: remove interceptors if needed (not shown for brevity)
    // eslint-disable-next-line
  }, [user, logOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
