import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField } from "@mui/material";
import BaseButton from "base/components/BaseButton";
import { login } from "base/utils/auth";
import { useCookies } from "react-cookie";
import { COOKIES_HANBIRO_GW } from "base/constant/cookies";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("luu");
  const [password, setPassword] = useState("matkhau1!");
  const [cookies, setCookies] = useCookies();

  const onClickLogin = () => {
    login({
      userName,
      password,
    }).then((res) => {
      if (res.success) {
        setCookies(COOKIES_HANBIRO_GW, res.session);
        navigate("/");
      }
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 1, width: 260 }}
      >
        <TextField
          id="user-name"
          label="User Name"
          variant="outlined"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <BaseButton variant="contained" onClick={onClickLogin}>
          Login
        </BaseButton>
      </Box>
    </Box>
  );
};

export default LoginPage;
