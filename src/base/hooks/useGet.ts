import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import axios from "base/lib/api";
import { isArray } from "lodash";

function useGet<T>(
  queryKeys: string | any[],
  url: string,
  // payload?: any,
  options?: UseQueryOptions<T>,
  config?: AxiosRequestConfig<any>
) {
  const keys = isArray(queryKeys) ? queryKeys : [queryKeys];
  const response = useQuery<T>({
    queryKey: keys,
    queryFn: () => {
      return axios.get<T>(url, config) as Promise<T>;
    },
    ...options,
  });

  return response;
}

export default useGet;
