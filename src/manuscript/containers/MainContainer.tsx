import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <Box className="manuscript-container">
      <Outlet />
    </Box>
  );
};

export default MainContainer;
