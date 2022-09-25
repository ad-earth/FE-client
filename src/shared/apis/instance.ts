import axios, { AxiosRequestConfig } from "axios";
const axiosInstance = axios.create({
  timeout: 3000,
  baseURL: process.env.REACT_APP_SERVER_URL,
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers) config.headers = {};
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1X0lkeCI6MSwiaWF0IjoxNjYzODU0NDU0fQ.W7SmOB5YkCLIjA-Q4R2GtPRRzJHuneX_4adnxPw0OKU";
    config.headers.Accept = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
