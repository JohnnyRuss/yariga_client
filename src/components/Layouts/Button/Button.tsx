import React from "react";

import { useTheme } from "@mui/material";
import generatePaletteColor from "./functions/generatePaleteColor";

import * as MuiStyled from "./Button.styled";
import { CustomButtonPropsT } from "interface/components/common";

const Button: React.FC<CustomButtonPropsT> = ({
  bgColor,
  color,
  title,
  disabled,
  fullWidth,
  icon,
  onClick,
  type = "button",
}) => {
  const { palette } = useTheme();

  return (
    <MuiStyled.Button
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      background_color={generatePaletteColor(bgColor, palette)}
      text_color={generatePaletteColor(color, palette)}
    >
      {title}
    </MuiStyled.Button>
  );
};

export default Button;
