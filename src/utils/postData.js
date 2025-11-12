import axiosInstance from "./axiosInstance";

const postData = async ({ endpoint, body = {} }) => {
  const { data } = await axiosInstance.post(endpoint, body);
  return data;
};

export default postData;
