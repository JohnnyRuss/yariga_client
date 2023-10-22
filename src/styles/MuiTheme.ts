import { createTheme } from "@mui/material";

const MuiTheme = createTheme({
  palette: {
    app_blue: {
      main: "#1e36e8",
      light: "#475be8",
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
    },
    error: {
      main: "#d01345",
    },
  },
});

export default MuiTheme;
