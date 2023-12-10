import { styled, Grid } from "@mui/material";

export const ImageListGridItem = styled(Grid)(({ theme }) => ({
  width: "33.33333%",

  [theme.breakpoints.up("app_tablet")]: {
    width: "20%",
  },

  [theme.breakpoints.up("app_desktop_large")]: {
    width: "33.33333%",
  },
}));
