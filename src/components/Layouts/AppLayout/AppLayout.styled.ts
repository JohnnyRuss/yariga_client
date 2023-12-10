import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const MainContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: theme.palette.app_bg?.dark,
  minHeight: "100vh",
}));

export const BodyContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  minHeight: "100%",
}));

export const ContentContainerBox = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: "100%",
  alignSelf: "stretch",
  padding: "0px",
  boxSizing: "border-box",

  [theme.breakpoints.up("app_mobile")]: {
    padding: "20px",
  },
}));
