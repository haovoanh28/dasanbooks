import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const MainLayout = () => {
  return (
    <Box>
      <Typography variant="h4">Main Layout</Typography>
      <Outlet />
    </Box>
  );
};

export default MainLayout;
