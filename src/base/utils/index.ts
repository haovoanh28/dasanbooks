import { isObject } from "lodash";

export function getBaseUrl() {}

export const getBaseHost = (defaultHost: String = "") => {
  let data = defaultHost ?? localStorage.getItem("host");
  return "https://" + data;
};

export const getGroupwareUrl = () => {
  let locationInfo = window.location;
  const { hostname } = locationInfo;
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      return process.env.REACT_APP_BASE_URL;
    } else {
      return getBaseHost("vndev.hanbiro.com") + "/ngw";
    }
  } else {
    if (window.location !== window.parent.location) {
      locationInfo = window.parent.location;
    }
    const { hostname, protocol } = locationInfo;
    const absPath = "/ngw";
    let apiUrl = [protocol, "//", hostname, absPath].join("");

    return apiUrl;
  }
};

export const keyStringify = (
  data: { [key: string]: any },
  preKey: string = ""
): { [key: string]: any } => {
  let newData: { [key: string]: any } = {};

  for (const i in data) {
    if (isObject(data[i])) {
      newData = { ...newData, ...keyStringify(data[i], i) };
    } else {
      newData[preKey ? `${preKey}.${i}` : i] = data[i];
    }
  }

  return newData;
};

export const getUserAvatarUrl = (
  cn: string | number | undefined,
  no: string | number | undefined,
  width = 35,
  height = 35,
  userLatestModified = Date.now(),
  isThumbnail = false
) => {
  return isThumbnail
    ? getGroupwareUrl() +
        `/org/user/photo/no/${no}/cn/${cn}/thumb/1?t=${userLatestModified}`
    : getGroupwareUrl() +
        `/org/user/photo/no/${no}/cn/${cn}?width=${width}&height=${height}&t=${userLatestModified}`;
};
