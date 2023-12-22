import { styled } from "@mui/material";

export const ActiveConversations = styled("aside")<{ is_on_feed: "1" | "0" }>(
  ({ theme, is_on_feed }) => ({
    padding: "8px",
    flex: 1,
    borderRight: "1px solid",
    borderRightColor: theme.palette.app_text?.contrastText,
    flexBasis: "100%",
    maxWidth: "100%",
    display: is_on_feed === "1" ? "none" : "flex",
    flexDirection: "column",

    [theme.breakpoints.up("app_desktop")]: {
      flexBasis: "300px",
      maxWidth: "350px",
      display: "flex",
    },
  })
);
