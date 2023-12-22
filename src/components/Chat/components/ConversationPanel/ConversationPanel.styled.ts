import { styled } from "@mui/material";

export const ConversationPanel = styled("aside")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flexBasis: "250px",
  borderLeft: "1px solid",
  borderLeftColor: theme.palette.app_text?.contrastText,
  height: "100%",

  ".conversation-panel__header": {
    height: "250px",
    overflow: "hidden",
    position: "relative",
  },

  ".conversation-panel__header-user": {
    width: "100%",
    alignItems: "center",
    padding: "8px",
    paddingTop: "16px",
    gap: "8px",

    "&--username": {
      fontWeight: 600,
      fontSize: 20,
      textTransform: "capitalize",
    },

    "&--email": {
      fontSize: 14,
      color: theme.palette.app_text?.main,
    },
  },

  ".conversation-panel__header-tabs--container": {
    width: "100%",
  },

  ".conversation-panel__header-tabs": {
    borderBottom: "1px solid",
    color: theme.palette.app_blue?.light,
    borderColor: theme.palette.app_text?.contrastText,
  },

  ".conversation-panel__close-btn": {
    position: "absolute",
    top: 0,
    right: 0,

    "&--icon": {
      fontSize: 26,
    },
  },

  ".conversation-panel__content": {
    width: "100%",
    paddingRight: "8px",
    paddingBottom: "8px",
    overflow: "hidden",
    height: "calc(100% - 255px)",
  },
}));
