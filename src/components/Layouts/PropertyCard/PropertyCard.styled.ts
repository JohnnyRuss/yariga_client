import {
  styled,
  Card as MuiCard,
  CardContent as MuiCardContent,
} from "@mui/material";

export const CardVertical = styled(MuiCard)(() => ({
  width: "350px",

  img: {
    height: "201px",
    width: "100%",
    borderRadius: "10px",
  },

  "&:hover": {
    boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
  },
}));

export const CardHorizontal = styled(MuiCard)(() => ({
  display: "flex",
  alignItems: "stretch",
  gap: "8px",
  boxShadow: "none",

  img: {
    maxWidth: "40%",
    minHeight: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  },
}));

export const CardContent = styled(MuiCardContent)(() => ({
  marginTop: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  justifyContent: "flex-start",
  padding: "0 !important",
  paddingBottom: "8px !important",
  width: "60%",
}));
