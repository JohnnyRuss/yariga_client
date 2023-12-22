import { styled } from "@mui/material";

export const NoSelectedConversation = styled("section")(({ theme }) => ({
  flex: 6,
  display: "none",
  flexDirection: "column",
  flexBasis: "60%",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",

  [theme.breakpoints.up("app_desktop")]: {
    display: "flex",
  },

  ".chat__fig": {
    width: "300px",

    img: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
    },
  },

  ".chat__no-conversation": {
    fontSize: 22,
    fontWeight: 600,
    color: theme.palette.app_text?.main,
  },
}));
