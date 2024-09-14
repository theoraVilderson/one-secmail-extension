import { Box } from "@mui/material";
import React from "react";
import "./HitAnimate.css";
function HitAnimate(prop: React.PropsWithChildren<{ className?: string }>) {
  const { children, className, ...allProp } = prop;
  const classNames =
    "hit-animation cursor-pointer" + (className ? " " + className : "");

  return (
    <Box className={classNames} {...allProp}>
      {children}
    </Box>
  );
}

export default HitAnimate;
