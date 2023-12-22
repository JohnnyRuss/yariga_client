import { styled, Box, Grid } from "@mui/material";

export const Message = styled(Box)<{
  has_text: "1" | "0";
  is_multi_link: "1" | "0";
}>(({ theme, has_text, is_multi_link }) => ({
  maxWidth: "100%",
  padding: has_text === "1" ? "5px 10px" : "0",

  [theme.breakpoints.up("app_tablet")]: {
    maxWidth: is_multi_link === "1" ? "320px" : "100%",
  },
}));

export const ImageGrid = styled(Grid)<{ belongs_to_active_user: "1" | "0" }>(
  ({ belongs_to_active_user }) => ({
    width: "100%",
    maxWidth: "460px",
    justifyContent: belongs_to_active_user === "1" ? "flex-end" : "flex-start",
  })
);

export const Image = styled("figure")(() => ({
  width: "100%",
  overflow: "hidden",
  aspectRatio: "1/1",
  borderRadius: "8px",
  cursor: "pointer",

  ".image-el__img": {
    objectFit: "cover",
    maxWidth: "100%",
  },
}));
