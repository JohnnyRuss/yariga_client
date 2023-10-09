import React from "react";

import { Button as MuiButton } from "@mui/material";

import { CustomButtonPropsT } from "interface/common";

const Button: React.FC<CustomButtonPropsT> = ({
  bgColor,
  color,
  title,
  disabled,
  fullWidth,
  icon,
  onClick,
  type,
}) => {
  return (
    <MuiButton
      onClick={onClick}
      sx={{
        flex: fullWidth ? 1 : "unset",
        padding: "6px 15px",
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        backgroundColor: bgColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: "10px",
        textTransform: "capitalize",
        "&:hover": {
          opacity: 0.9,
          backgroundColor: bgColor,
        },
      }}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
