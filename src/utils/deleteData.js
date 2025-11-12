import axiosInstance from "./axiosInstance";

export const deleteData = async (endpoint, body = {}) => {
  const { data } = await axiosInstance.delete(endpoint, {
    data: body,
  });
  return data;
};
