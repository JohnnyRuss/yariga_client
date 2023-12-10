import { createTheme } from "@mui/material";

const themeBreakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
  app_mobile: 500,
  app_tablet: 900,
  app_desktop: 1200,
  app_desktop_large: 1680,
};

const MuiTheme = createTheme({
  palette: {
    app_blue: {
      main: "#1e36e8",
      light: "#475be8",
    },
    app_green: {
      main: "#2ED480",
    },
    app_text: {
      main: "#808191",
      dark: "#11142d",
      light: "#fcfcfc",
      contrastText: "#e4e8ef",
    },
    app_bg: {
      main: "#fcfcfc",
      dark: "#f4f4f4",
      contrastText: "#f3f3f3",
    },
    error: {
      main: "#d01345",
    },
  },

  breakpoints: {
    values: themeBreakpoints,
    up: (key) =>
      `@media (min-width:${
        themeBreakpoints[key as keyof typeof themeBreakpoints]
      }px)`,
    down: (key) =>
      `@media (max-width:${
        themeBreakpoints[key as keyof typeof themeBreakpoints]
      }px)`,
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "app_mobile",
      "app_tablet",
      "app_desktop",
      "app_desktop_large",
    ],
  },
});

export default MuiTheme;
