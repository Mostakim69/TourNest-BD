import axiosInstance from "./axiosInstance";

const updateData = async ({ endpoint, body = {} }) => {
  const { data } = await axiosInstance.patch(endpoint, body);
  return data;
};

export default updateData;
