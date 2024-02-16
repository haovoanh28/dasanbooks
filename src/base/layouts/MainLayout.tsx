import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const MainLayout = () => {
  useEffect(() => {
    console.log("Main layout rendererd");
  }, []);

  return (
    <Box>
      <Typography variant="h4">Main Layout</Typography>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
