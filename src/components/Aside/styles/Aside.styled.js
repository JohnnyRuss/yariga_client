import { styled, Box } from "@mui/material";

export const AsideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  minHeight: "100vh",
  padding: "8px 12px",
  background: theme.palette.app_bg.main,
}));
