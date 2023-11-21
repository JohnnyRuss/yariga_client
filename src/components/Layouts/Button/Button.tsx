import React from "react";

import { useTheme } from "@mui/material";
import generatePaletteColor from "./functions/generatePaleteColor";

import * as MuiStyled from "./Button.styled";
import { SxProps } from "@mui/material";

type CustomButtonPropsT = {
  type?: "button" | "submit";
  title: string;
  bgColor?: string;
  color?: string;
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  attributes?: React.HTMLAttributes<HTMLButtonElement> | SxProps;
};

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
  attributes,
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
      {...(attributes ? (attributes as any) : {})}
    >
      {title}
    </MuiStyled.Button>
  );
};

export default Button;
