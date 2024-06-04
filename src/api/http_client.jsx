import axios from "axios";

export const httpClient = (req = {}) => {
  const axiosConfig = {
    baseURL: import.meta.env.VITE_API_PATH,
    headers: { ...req }
  };

  return axios.create(axiosConfig);
};
