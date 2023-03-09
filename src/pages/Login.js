import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { TOKEN } from "./Main";

function Login() {
  const navigate = useNavigate();

  const doLogin = () => {
    localStorage.setItem(TOKEN, "asdadsa");
    navigate("/");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        flexDirection: "column",
        display: "flex",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
      />
      <Button variant="contained" onClick={doLogin}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
