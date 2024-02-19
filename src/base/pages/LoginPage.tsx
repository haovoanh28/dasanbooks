import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const LoginPage = () => {
  return (
    <Box>
      <Typography>Login Page</Typography>
      <Outlet />
    </Box>
  );
};

export default LoginPage;
