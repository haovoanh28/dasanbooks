import { ReactElement, useEffect } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import useAuth from "base/hooks/useAuth";
import { Box, Typography } from "@mui/material";

interface Props {
  children: ReactElement;
}

const AuthGuard = ({ children }: Props) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const isHome = useMatch("/");

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
  }, [isLoggedIn, isHome]);

  return children;
};

export default AuthGuard;
