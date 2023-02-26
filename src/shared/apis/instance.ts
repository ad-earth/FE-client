import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";

const axiosConfig: AxiosRequestConfig = {
  timeout: 3000,
  baseURL: process.env.REACT_APP_SERVER_URL,
};
const axiosInstance = axios.create(axiosConfig);

const token = localStorage.getItem("token");

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers) config.headers = {};
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers.Accept = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) toast.error(response.data.errorMessage.toString());
    return Promise.reject(error);
  }
);
export default axiosInstance;
