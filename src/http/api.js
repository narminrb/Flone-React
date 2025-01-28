import axios from "axios";
const AxiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
});

export const getCardsApi = async (url) => {
  const { data } = await AxiosInstance.get(url);
  return data;
};