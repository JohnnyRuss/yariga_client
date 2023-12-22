import { styled, Alert, Box, Button } from "@mui/material";

export const OverlappedImageUploadAlert = styled(Alert)(() => ({
  position: "relative",

  "alert__close-btn": {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

export const Progress = styled(Box)(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: "5px",
  width: "100%",
  position: "absolute",
  backgroundColor: theme.palette.app_text?.contrastText,

  ".progress__line": {
    zIndex: 1,
    backgroundColor: theme.palette.app_blue?.light,
    height: "100%",
  },
}));

export const RemoveImageButton = styled(Button)(({ theme }) => ({
  top: "4px",
  right: "4px",
  width: "18px",
  height: "18px",
  minWidth: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  position: "absolute",
  color: theme.palette.app_text?.dark,
  backgroundColor: theme.palette.app_text?.light,

  "&:hover": {
    color: theme.palette.app_text?.dark,
    backgroundColor: theme.palette.app_text?.light,
  },

  ".remove__icon": {
    fontSize: "14px",
  },
}));

export const UploadingImageItem = styled(Box)(() => ({
  width: "70px",
  height: "70px",
  borderRadius: "5px",
  overflow: "hidden",
  position: "relative",
}));
