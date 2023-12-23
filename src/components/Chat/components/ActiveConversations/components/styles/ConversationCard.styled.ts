import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ConversationCard = styled(NavLink)(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  borderRadius: "10px",
  display: "inline-block",

  ".conversation-card__stack": {
    gap: "8px",
    padding: "8px 7px",
    flexDirection: "row",
    position: "relative",
  },

  ".conversation-card__stack-details": {
    flex: 1,
    marginTop: "4px",
    maxWidth: "calc(100% - 65px)",

    "&--username": {
      fontWeight: 600,
      textTransform: "capitalize",
    },

    "&--message": {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },

    "&--message__badge": {
      position: "absolute",
      right: "40px",
      width: "12px",
      height: "12px",
      marginLeft: "auto",
      borderRadius: "100%",
      backgroundColor: theme.palette.app_blue?.light,
    },

    "&--message__options": {
      position: "absolute",
      right: "0px",
      display: "block",

      "@media (hover:hover)": {
        display: "none",
      },
    },
  },

  ".conversation-card__stack-date": {
    marginLeft: "auto",
    marinTop: "4px",
    width: "max-content",
    minWidth: "60px",
    fontSize: 12,
    color: theme.palette.app_text?.main,
  },

  "&:hover .conversation-card__stack-details--message__options": {
    display: "block",
  },

  "&.active": {
    backgroundColor: theme.palette.app_blue?.light,
    color: theme.palette.app_text?.light,
  },

  "&.active .conversation-card__stack-date": {
    color: theme.palette.app_text?.light,
  },

  "&.active .MuiTypography-root.conversation-text": {
    color: theme.palette.app_text?.light,
  },

  ".conversation-card__last-message": {
    display: "flex",
    width: "100%",
    fontSize: 14,

    "&--sender": {
      textTransform: "capitalize",
      fontSize: "inherit",
      fontWeight: "inherit",
      color: "inherit",
    },
  },
}));
