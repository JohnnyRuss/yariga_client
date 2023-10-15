import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const MainContainerBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const BodyContainer = styled(Box)(() => ({
  display: "flex",
  gap: "15px",
  alignItems: "flex-start",
}));

export const ContentContainerBox = styled(Box)(() => ({
  flex: 1,
  // padding: "5px",
}));
