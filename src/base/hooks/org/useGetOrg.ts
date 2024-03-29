import { URL_GET_ORG } from "base/constant/url";
import { keyStringify } from "base/utils";
import useGet from "../useGet";
import { GET_ORG } from "./queryKeys";

export const useGetOrg = (params: any, keys: string[] = [], options?: any) => {
  // let url = [getGroupwareUrl(), URL_GET_ORG].join("/");
  let url = URL_GET_ORG;
  const { idURL, fid, ...others } = params || {};
  if (idURL) {
    url = url + "/" + idURL;
  }

  return useGet<any>(
    [
      GET_ORG,
      ...(keys ? keys : []),
      // ...(fid ? [fid] : []),
      keyStringify(params),
    ],
    url,
    params,
    options,
    { isGroupwareUrl: true }
  );
};
