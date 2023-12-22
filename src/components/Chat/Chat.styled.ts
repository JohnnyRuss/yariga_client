import { styled, Box } from "@mui/material";

export const ChatContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "94vh",

  [theme.breakpoints.up("app_mobile")]: {
    height: "82vh",
  },

  ".chat__content-box": {
    padding: 0,
    width: "100%",
    height: "100%",
    inset: 0,
    overflowX: "hidden",
    flexDirection: "row",
    position: "absolute",
  },
}));
