import { styled, Box } from "@mui/material";

export const SearchList = styled(Box)(({ theme }) => ({
  marginTop: "15px",

  ".conversations__search-list": {
    gap: "16px",
    paddingRight: "8px",
  },

  ".conversations__search-list--item": {
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    width: "100%",
    cursor: "pointer",
    paddingBottom: "5px",
    boxSizing: "border-box",
    borderBottom: "1px solid",
    borderColor: "transparent",
    transition: "all 0.2s ease",

    "&:hover": {
      borderColor: "app_blue.light",
    },

    "&__fig": {
      width: "50px",
      height: "50px",
      minWidth: "50px",
      overflow: "hidden",
      borderRadius: "100%",

      img: {
        objectFit: "cover",
      },
    },

    "&__username": {
      fontWeight: 600,
      textTransform: "capitalize",
    },

    "&__email": {
      fontSize: 14,
      color: theme.palette.app_text?.main,
    },
  },
}));
