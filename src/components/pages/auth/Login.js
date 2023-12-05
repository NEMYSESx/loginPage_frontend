import { TextField, Button, Alert, Box } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      document.getElementById("login-form").reset();
      setError({ status: true, msg: "Login Success", type: "success" });
      navigate("/dashBoard");
    } else {
      setError({ status: true, msg: "All field required", type: "error" });
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        onSubmit={handleSubmit}
        id="login-form"
      >
        <TextField
          required
          fullWidth
          margin="normal"
          id="email"
          name="email"
          label="Email Address"
        ></TextField>
        <TextField
          required
          fullWidth
          margin="normal"
          id="password"
          name="password"
          label="Password"
        ></TextField>
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Login
          </Button>
        </Box>
      </Box>
      <NavLink to="/forgetPassword">Forget Password?</NavLink>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
    </>
  );
};

export default Login;
