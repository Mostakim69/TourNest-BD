import axiosInstance from "./axiosInstance";

export const fetchData = async (endpoint, query = {}) => {
  const { data } = await axiosInstance.get(endpoint, {
    params: query,
  });
  return data;
};
