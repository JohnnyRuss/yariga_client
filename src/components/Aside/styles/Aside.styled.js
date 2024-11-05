import { styled, Box } from "@mui/material";

export const AsideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  height: "calc(100vh - 56px)",
  // minHeight: "100%",
  padding: "8px 12px",
  background: theme.palette.app_bg.main,
  position: "sticky",
  top: "56px",
  borderRight: "1px solid",
  borderRightColor: theme.palette.app_text.contrastText,
  boxSizing: "border-box",
  boxShadow: "5px 0px 8px rgba(0,0,0,0.3)",

  "&::after": {
    content: "''",
    position: "absolute",
    zIndex: 1,
    top: "0px",
    right: "calc(-100vw + 100%)",
    width: "calc(100vw - 100%)",
    borderTop: "1px solid",
    borderColor: theme.palette.app_text.contrastText,
    boxShadow: "0px 6px 10px rgba(0,0,0,0.4)",
  },

  [theme.breakpoints.down("app_mobile")]: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    top: "calc(100vh - 50px)",
    height: "50px",
    width: "100%",
    flexDirection: "row",
    zIndex: 99,
    justifyContent: "space-between",

    "&::after": {
      display: "none",
    },
  },
}));
