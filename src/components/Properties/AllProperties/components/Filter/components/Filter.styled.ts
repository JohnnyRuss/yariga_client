import { styled, Button as MuiButton } from "@mui/material";

export const MoreFilterButton = styled(MuiButton)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  color: theme.palette.app_text?.dark,
  backgroundColor: theme.palette.app_bg?.contrastText,

  "&:hover": {
    color: theme.palette.app_text?.dark,
    backgroundColor: theme.palette.app_bg?.contrastText,
  },
}));
