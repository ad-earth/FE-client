import axios from "axios";

const axiosInstance = axios.create({
  timeout: 3000,
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export default axiosInstance;
