import React from "react";
import "./components/Header.css";
import { Box } from "@mui/material";
import Header from "./components/Header";
function Popup() {
  return (
    <Box className="text-green-500 w-full">
      <Box className="w-[320px] min-h-[600px] mx-auto">
        <Header />
      </Box>
    </Box>
  );
}

export default Popup;
