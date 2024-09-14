import { Box } from "@mui/material";
import React from "react";
import HitAnimate from "./HitAnimate";

function Header() {
  return (
    <Box
      className=" w-full text-white flex items-center justify-around h-[80px]"
      sx={{
        bgcolor: "rgba(23, 34, 59, 1)",
      }}
    >
      {" "}
      <HitAnimate>
        <img
          src="imgs/settingBtn.svg"
          className="w-[50px] h-[50px]"
          alt="settingBtn"
        />
      </HitAnimate>
      <a
        href="https://www.1secmail.com"
        target="_blank"
        className="flex items-center justify-center text-white no-underline w-[65%] gap-[5px]"
      >
        <img src="imgs/logo.png" alt="logo" />
        <h1 className=" text-[1.5rem] font-bold">1secMail</h1>
      </a>
    </Box>
  );
}

export default Header;
