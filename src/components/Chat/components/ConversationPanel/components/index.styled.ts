import { styled, Box } from "@mui/material";

export const ImagesList = styled(Box)(({ theme }) => ({
  padding: "0 8px",
  paddingRight: "0",
  width: "100%",
  height: "100%",

  ".conversation-panel__images-list__grid-item": {
    width: "33.33333%",
    aspectRatio: "1/1",

    [theme.breakpoints.up("app_tablet")]: {
      width: "20%",
    },

    [theme.breakpoints.up("app_desktop_large")]: {
      width: "33.33333%",
    },

    "&--fig": {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      borderRadius: "8px",
      cursor: "pointer",

      img: {
        objectFit: "cover",
        maxWidth: "100%",
        height: "100%",
      },
    },
  },
}));

export const URLList = styled(Box)(({ theme }) => ({
  padding: "0 8px",
  paddingRight: "0",
  width: "100%",
  height: "100%",

  ".conversation-panel__url-list": {
    gap: "8px",
  },

  ".conversation-panel__url-list__item-stack": {
    flexDirection: "row",
    gap: "8px",
    alignItems: "flex-start",

    "&--fig": {
      width: "85px",
      height: "85px",
      minWidth: "85px",
      borderRadius: "5px",
      overflow: "hidden",

      img: {
        objectFit: "cover",
        maxWidth: "100%",
        maxHeight: "100%",
      },
    },

    "&--content": {
      paddingTop: "3px",
    },
  },
}));
