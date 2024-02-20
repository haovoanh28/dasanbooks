import { axiosPost, PostHeaders } from "base/lib/api";
import { encrypt } from "./encrypt";
import { LoginResponseType } from "types/auth/login";

type LoginParams = {
  userName: string;
  password: string;
};
export const login = ({ userName, password }: LoginParams) => {
  const params = {
    gw_id: encrypt(userName),
    gw_pass: encrypt(password),
  };

  return axiosPost<LoginResponseType>(
    "/sign/auth",
    params,
    PostHeaders,
    undefined,
    {
      isGroupwareUrl: true,
    }
  );
};
