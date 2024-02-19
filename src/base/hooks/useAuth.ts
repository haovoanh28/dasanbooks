import { useCookies } from "react-cookie";
import { COOKIES_HANBIRO_GW } from "base/constant/cookies";

export default function useAuth() {
  const [cookies] = useCookies();
  let isLoggedIn = false;

  if (cookies?.[COOKIES_HANBIRO_GW]) {
    isLoggedIn = true;
  }

  return { isLoggedIn };
}
