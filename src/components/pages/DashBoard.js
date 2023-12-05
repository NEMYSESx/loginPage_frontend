import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <>
      <Button onClick={handleLogout}>Logout</Button>
      DashBoard
    </>
  );
};

export default DashBoard;
