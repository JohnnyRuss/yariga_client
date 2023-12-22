import { styled, InputAdornment, IconButton } from "@mui/material";

export const FeedFormTextFieldActions = styled(InputAdornment)<{
  disabled_select_image: "1" | "0";
}>(({ disabled_select_image }) => ({
  ".messenger-actions__stack": {
    gap: 0.5,
    alignItems: "center",
    flexDirection: "row",
  },

  ".messenger-actions__img-label": {
    cursor: "pointer",
    display: "inline-flex",
    padding: "8px",
    borderRadius: "100px",
    opacity: disabled_select_image === "1" ? 0.5 : 1,

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
}));

export const SendMessageButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.app_blue?.light,
  marginTop: "auto",

  "&:disabled": {
    opacity: 0.5,
    pointerEvents: "none",
  },

  ".send-message__btn": {
    fontSize: "42px",
  },
}));
