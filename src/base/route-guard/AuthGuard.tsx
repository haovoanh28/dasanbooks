import { ReactElement, useEffect, useState } from "react";
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
  const [isCheckedLogin, setIsCheckedLogin] = useState(false);

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setIsCheckedLogin(true);
    }
  }, [isLoggedIn, isHome]);

  // if (!isCheckedLogin) {
  //   return <Typography>Checking auth ...</Typography>;
  // }

  return children;
};

export default AuthGuard;
