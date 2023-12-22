import { styled, Box, Stack, Typography, IconButton } from "@mui/material";

export const FeedHeader = styled(Box)(({ theme }) => ({
  padding: 8,
  position: "relative",
  zIndex: 9,
  borderBottom: "1px solid",
  backgroundColor: theme.palette.app_bg?.main,
  borderBottomColor: theme.palette.app_text?.contrastText,

  ".feed-header__stack": {
    flexDirection: "row",
    gap: 1,
    height: "100%",
    alignItems: "center",
  },

  ".feed-header__stack-back--btn": {
    padding: 0,
    width: "40px",
    height: "40px",
    minWidth: "auto",
    color: theme.palette.app_text?.dark,

    [theme.breakpoints.up("app_desktop")]: {
      display: "none",
    },
  },
}));

export const FeedHeaderUser = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: "8px",

  ".header-user__content-stack": {
    marginTop: "4px",

    "&--username": {
      fontWeight: 600,
      textTransform: "capitalize",
    },

    "&--email": {
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      fontSize: 14,
      color: theme.palette.app_text?.main,
    },
  },
}));

export const FeedHeaderActions = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: "8px",
  height: "100%",
  alignItems: "center",
  marginLeft: "auto",
}));

export const FeedHeaderActionTooltipTitle = styled(Typography)(() => ({
  textAlign: "center",
}));

export const FeedHeaderActionTooltipButton = styled(IconButton)(
  ({ theme }) => ({
    width: "40px",
    height: "40px",
    display: "none",

    [theme.breakpoints.up("app_mobile")]: {
      display: "flex",
    },
  })
);
