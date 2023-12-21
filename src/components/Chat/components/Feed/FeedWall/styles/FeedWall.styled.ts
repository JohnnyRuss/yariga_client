import { Box, styled } from "@mui/material";

export const FeedWallContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",

  ".feed-wall__wrapper": {
    inset: 0,
    padding: 1,
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    height: "74.5vh",
    position: "absolute",

    "&::-webkit-scrollbar": { display: "none" },
  },

  ".feed-wall__scrollbar-wrapper": {
    gap: 2,
    width: "100%",
  },

  ".divider": {
    width: "70%",
    fontSize: 14,
    margin: "30px 0",
    alignSelf: "center",
    color: theme.palette.app_text?.main,
  },
}));
