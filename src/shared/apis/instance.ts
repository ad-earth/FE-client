import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  timeout: 3000,
  baseURL: process.env.REACT_APP_SERVER_URL,
};
const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers) config.headers = {};
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers["Authorization"] = process.env.REACT_APP_TEST_TOKEN;
    config.headers.Accept = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;