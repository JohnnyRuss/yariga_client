import {
  styled,
  Card as MuiCard,
  CardContent as MuiCardContent,
} from "@mui/material";

export const CardVertical = styled(MuiCard)(() => ({
  // width: "350px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  boxShadow: "none",

  img: {
    maxWidth: "100%",
    maxHeight: "40%",
  },
}));

export const CardHorizontal = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  gap: "8px",
  boxShadow: "none",
  height: "250px",
  width: "100%",

  ".cardThumbnail": {
    maxWidth: "400px",
    width: "45%",
    height: "100%",
    maxHeight: "100%",
    borderRadius: "10px",
    overflow: "hidden",
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "auto",

    ".cardThumbnail": {
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      maxHeight: "250px",
    },
  },
}));

export const CardContent = styled(MuiCardContent)(({ theme }) => ({
  marginTop: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  justifyContent: "flex-start",
  padding: "0 !important",
  paddingBottom: "8px !important",
  width: "60%",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
