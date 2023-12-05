import {
  TextField,
  Button,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
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
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      Cpassword: data.get("Cpassword"),
      tc: data.get("tc"),
    };
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.Cpassword &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.Cpassword) {
        document.getElementById("registration-form").reset();
        setError({
          status: true,
          msg: "Registration Success",
          type: "success",
        });
        navigate("/dashboard");
      } else {
        setError({
          status: true,
          msg: "password and Confirm passowrd do not match",
          type: "error",
        });
      }
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
        id="registration-form"
      >
        <TextField
          required
          fullWidth
          margin="normal"
          id="name"
          name="name"
          label="name"
        ></TextField>
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
        <TextField
          required
          fullWidth
          margin="normal"
          id="Cpassword"
          name="Cpassword"
          label="Confirm Password"
        ></TextField>
        <FormControlLabel
          control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
          label="I agree term and condition "
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Register
          </Button>
        </Box>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
    </>
  );
};
export default Registration;
