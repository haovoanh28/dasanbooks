import axios, { AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
import { BASE_API_URL } from "base/constant/url";
import isEmpty from "lodash/isEmpty";
import merge from "lodash/merge";
import { getGroupwareUrl } from "base/utils";

export const PostHeaders = {
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
};
export type CustomAxiosConfigType = Omit<
  AxiosRequestConfig,
  "method" | "url" | "headers" | "responseType" | "data" | "params"
>;

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
    
    if (config.isGroupwareUrl) {
      config.baseURL = getGroupwareUrl();
    } else {
      config.baseURL = BASE_API_URL;
    }

    return {
      ...config,
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

export async function axiosAPI<T>(
  endPoint: string,
  method: string,
  payload = {},
  headers = {},
  responseType = "json",
  customConfig: CustomAxiosConfigType = {}
): Promise<T> {
  let config: AxiosRequestConfig<any> = {
    method: method,
    url: endPoint as string,
    headers: headers,
    responseType: responseType as ResponseType,
  };

  if (method === "GET") {
    config.params = payload;
  } else {
    config.data = payload;
  }

  if (!isEmpty(customConfig)) {
    merge(config, customConfig);
  }

  try {
    const response: AxiosResponse = await axiosInstance(config);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function axiosGet<T>(
  endPoint: string,
  payload = {},
  headers = {},
  responseType = "json",
  customConfig: CustomAxiosConfigType = {}
): Promise<T> {
  let config: AxiosRequestConfig<any> = {
    method: "GET",
    url: endPoint as string,
    params: payload,
    headers: headers,
    responseType: responseType as ResponseType,
  };
  if (!isEmpty(customConfig)) {
    merge(config, customConfig);
  }

  try {
    const response: AxiosResponse = await axiosInstance(config);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * Post Method
 */
export async function axiosPost<T>(
  endPoint: string,
  payload = {},
  headers = {},
  responseType = "json",
  customConfig: CustomAxiosConfigType = {}
): Promise<T> {
  let config: AxiosRequestConfig<any> = {
    method: "POST",
    url: endPoint as string,
    data: payload,
    headers: headers,
    responseType: responseType as ResponseType,
  };
  if (!isEmpty(customConfig)) {
    merge(config, customConfig);
  }

  return axiosInstance(config)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * Delete Method
 */
export async function axiosDel<T>(
  endPoint: string,
  payload = {},
  headers = {},
  responseType = "json",
  customConfig: CustomAxiosConfigType = {}
): Promise<T> {
  let config: AxiosRequestConfig<any> = {
    method: "DELETE",
    url: endPoint as string,
    data: payload,
    headers: headers,
    responseType: responseType as ResponseType,
  };
  if (!isEmpty(customConfig)) {
    merge(config, customConfig);
  }

  try {
    const response = await axiosInstance(config);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * PUT Method
 */
export async function axiosPut<T>(
  endPoint: string,
  payload = {},
  headers = {},
  responseType = "json",
  customConfig: CustomAxiosConfigType = {}
): Promise<T> {
  let config: AxiosRequestConfig<any> = {
    method: "PUT",
    url: endPoint as string,
    data: payload,
    headers: headers,
    responseType: responseType as ResponseType,
  };
  if (!isEmpty(customConfig)) {
    merge(config, customConfig);
  }

  return axiosInstance(config)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export default axiosInstance;
