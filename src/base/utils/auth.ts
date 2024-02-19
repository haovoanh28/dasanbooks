import { axiosPost, PostHeaders } from "base/lib/api";
import { encrypt } from "./encrypt";

export const login = () => {
  const params = {
    gw_id: encrypt("luu"),
    gw_pass: encrypt("matkhau1!"),
  };

  return axiosPost("/sign/auth", params, PostHeaders, undefined, {
    isGroupwareUrl: true,
  });
};
