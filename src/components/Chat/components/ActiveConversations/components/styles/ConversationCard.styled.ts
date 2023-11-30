import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ConversationCard = styled(NavLink)(() => ({
  padding: "8px 7px",
  borderRadius: "10px",

  "&:hover .conversation-options__box": {
    display: "block",
  },

  "&.active": {
    backgroundColor: "app_blue.light",
    color: "app_text.light",
  },

  "&.active .MuiBox-root.conversation-date p": {
    color: "app_text.light",
  },

  "&.active .MuiTypography-root.conversation-text": {
    color: "app_text.light",
  },

  ".last-message": {
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  ".badge": {
    position: "absolute",
    right: "40px",
    width: "12px",
    height: "12px",
    marginLeft: "auto",
    borderRadius: "100%",
    backgroundColor: "app_blue.light",
  },

  ".conversation-options__box": {
    position: "absolute",
    right: "-15px",
    display: "block",

    "@media (hover:hover)": {
      display: "none",
    },
  },
}));
