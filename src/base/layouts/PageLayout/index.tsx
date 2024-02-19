import { memo, useEffect } from "react";
import { Box } from "@mui/material";
import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";
import { DRAWER_WIDTH } from "base/constant/ui";
import { login } from "base/utils/auth";

const PageLayout = () => {
  useEffect(() => {
    login().then(res => {
      console.log(res);
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
