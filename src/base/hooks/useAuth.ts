import { useCookies } from "react-cookie";

export default function useAuth() {
  const [cookies] = useCookies(["HANBIRO_GW"]);
  console.log("cookies ==> ", cookies);
  let isLoggedIn = false;

  if (cookies?.HANBIRO_GW) {
    isLoggedIn = true;
  }

  return { isLoggedIn };
}
