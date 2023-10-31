import React from "react";

import { useTheme } from "@mui/material";
import generatePaletteColor from "./functions/generatePaleteColor";

import * as MuiStyled from "./Button.styled";
import { CustomButtonPropsT } from "interface/components/common";

const Button: React.FC<CustomButtonPropsT> = ({
  title,
  icon,
  bgColor,
  color,
  disabled = false,
  fullWidth = false,
  onClick = () => {},
  type = "button",
  variant = "contained",
}) => {
  const { palette } = useTheme();

  return (
    <MuiStyled.Button
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      sx={{ height: "max-content" }}
      background_color={
        bgColor ? generatePaletteColor(bgColor, palette) : "app_blue.light"
      }
      text_color={
        color ? generatePaletteColor(color, palette) : "app_text.light"
      }
      startIcon={icon}
    >
      {title}
    </MuiStyled.Button>
  );
};

export default Button;
