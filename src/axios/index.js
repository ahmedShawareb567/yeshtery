import axios from "axios";

const AxiosClient = () => {
  const instance = axios.create({
    baseURL: "https://dummyjson.com",
  });

  return instance;
};

export const $axios = AxiosClient();
