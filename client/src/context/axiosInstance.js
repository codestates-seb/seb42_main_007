import axios from "axios";
import { useAuth } from "./authContext";

const axiosInstance = axios.create({
  baseURL: "http://43.201.167.13:8080/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuth();

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;