import axios from "axios";
const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const getCardsApi = (url) => {
  try {
    return AxiosInstance.get(url).then((res) => res.data);
  } catch (error) {
    throw new Error(error);
  }
};

export const postBook = (url, data) => {
  AxiosInstance.post(url, data).then((res) => res.data);
};

export const deleteBookApi = (url, id) => {
  AxiosInstance.delete(`${url}/${id}`).then((res) => res.data);
};