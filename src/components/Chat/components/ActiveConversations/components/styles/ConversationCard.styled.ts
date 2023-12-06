import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ConversationCard = styled(NavLink)(({ theme }) => ({
  padding: "8px 7px",
  borderRadius: "10px",
  overflow: "hidden",

  "&:hover .conversation-options__box": {
    display: "block",
  },

  "&.active": {
    backgroundColor: theme.palette.app_blue?.light,
    color: theme.palette.app_text?.light,
  },

  "& .MuiBox-root.conversation-date": {
    marginLeft: "auto",
    marinTop: "4px",
    width: "max-content",
    minWidth: "60px",
  },

  "&.active .MuiBox-root.conversation-date p": {
    color: theme.palette.app_text?.light,
  },

  "&.active .MuiTypography-root.conversation-text": {
    color: theme.palette.app_text?.light,
  },

  ".last-message": {
    display: "flex",
    width: "100%",
  },

  ".badge": {
    position: "absolute",
    right: "40px",
    width: "12px",
    height: "12px",
    marginLeft: "auto",
    borderRadius: "100%",
    backgroundColor: theme.palette.app_blue?.light,
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
