import { Box, Stack, styled } from "@mui/material";

export const FeedWall = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",

  ".feed-wall__wrapper": {
    inset: 0,
    padding: 1,
    paddingRight: "8px",
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

  ".infinite-scroll__def": {
    width: "100%",
    display: "flex",
    paddingRight: "8px",
    flexDirection: "column-reverse",
    paddingBottom: "8px",
  },
}));

export const FeedWallStarter = styled(Stack)(({ theme }) => ({
  gap: 1.5,
  order: 1,
  width: "100%",
  alignItems: "center",
  padding: "64px 0px",

  [theme.breakpoints.up("app_mobile")]: {
    padding: "120px 0px",
  },

  ".feed-wall--starter__username": {
    fontWeight: 600,
    fontSize: 20,
    textTransform: "capitalize",
  },

  ".feed-wall--starter__email": {
    fontSize: 14,
    color: theme.palette.app_text?.main,
  },

  ".feed-wall--starter__yariga": {
    fontWeight: 600,
    fontSize: 16,
    color: theme.palette.app_text?.main,
  },
}));

export const SeenBadge = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  order: -1,
  marginTop: "5px",
}));
