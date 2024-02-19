import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { axiosGet } from "base/lib/api";
import { isArray } from "lodash";

function useGet<T>(
  queryKeys: string | any[],
  url: string,
  payload?: any,
  options?: Omit<UseQueryOptions<T>, 'queryKey'>,
  config?: AxiosRequestConfig<any>
) {
  const keys = isArray(queryKeys) ? queryKeys : [queryKeys];
  const response = useQuery<T>({
    queryKey: keys,
    queryFn: () => {
      return axiosGet<T>(
        url,
        payload,
        undefined,
        undefined,
        config
      ) as Promise<T>;
    },
    ...options,
  });

  return response;
}

export default useGet;
