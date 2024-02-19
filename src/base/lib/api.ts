import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_API_URL } from "base/constant/url";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here if needed
    // config.baseURL = BASE_API_URL;
    let baseURL = BASE_API_URL;
    if (config?.baseURL) {
      baseURL = config.baseURL;
    }
    return {
      ...config,
      baseURL: baseURL,
    };
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Modify the response data here if needed
    return response;
  },
  (error) => {
    // Handle response error here
    return Promise.reject(error);
  }
);

export default axiosInstance;
