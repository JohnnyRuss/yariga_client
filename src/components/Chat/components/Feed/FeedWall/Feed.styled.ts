import { Box, Stack, styled } from "@mui/material";

export const FeedWall = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",

  ".feed-wall__wrapper": {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 1,
    paddingRight: "8px",
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",

    "&::-webkit-scrollbar": { display: "none" },
  },

  ".feed-wall__scrollbar-wrapper": {
    position: "absolute",
    top: 5,
    bottom: 5,
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

  ".infinite-scroll-component__outerdiv": {
    position: "absolute",
    inset: 0,
  },

  ".infinite-scroll__def": {
    width: "100%",
    maxHeight: "100%",
    overflowY: "auto",
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
  paddingBottom: "60px",
  paddingTop: "90px",

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
