import { memo, useEffect } from "react";
import { Box } from "@mui/material";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";
import { DRAWER_WIDTH } from "base/constant/ui";
import { login } from "base/utils/auth";
import { useCookies } from "react-cookie";
import { COOKIES_HANBIRO_GW } from "base/constant/cookies";

const PageLayout = () => {
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    login().then((res) => {
      if (!cookies[COOKIES_HANBIRO_GW]) {
        setCookie(COOKIES_HANBIRO_GW, res.session);
      }
    });
  }, []);

  return (
    <>
      <SideNav />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${DRAWER_WIDTH}px`,
        }}
      >
        <Box sx={{ p: 2, pt: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default memo(PageLayout);
