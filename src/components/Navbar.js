import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography varient="h5" component="div" sx={{ flexGrow: 1 }}>
              Register for free candy
            </Typography>
            <Button
              component={NavLink}
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "black" : "" };
              }}
              to="/"
            >
              Home
            </Button>
            <Button
              component={NavLink}
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "black" : "" };
              }}
              to="/Contacts"
            >
              Contacts
            </Button>
            <Button
              component={NavLink}
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "black" : "" };
              }}
              to="/login"
            >
              Login and registration
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
