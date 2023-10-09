import { styled, Box } from "@mui/material";

export const AsideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  height: "calc(100vh - 72px)",
  padding: "8px 12px",
  background: theme.palette.app_bg.main,
  position: "sticky",
  top: "56px",
}));
