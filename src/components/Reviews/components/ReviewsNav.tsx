import { nanoid } from "@reduxjs/toolkit";
import { NavLink } from "react-router-dom";

import { PATHS } from "config/paths";

import { Stack, Box } from "@mui/material";

interface ReviewsNavT {}

const REVIEW_NAV_ROUTES = [
  { path: PATHS.all_reviews_page, label: "All Reviews" },
  { path: PATHS.published_reviews_page, label: "Published" },
  { path: PATHS.deleted_reviews_page, label: "Deleted" },
];

const ReviewsNav: React.FC<ReviewsNavT> = (props) => {
  return (
    <Stack
      mt="20px"
      gap="10px"
      px="25px"
      pt="15px"
      direction="row"
      borderRadius="15px"
      alignItems="center"
      bgcolor="app_bg.main"
      width={{ xs: "100%", md: "max-content" }}
    >
      {REVIEW_NAV_ROUTES.map((route) => (
        <Box
          key={nanoid()}
          sx={{ color: "app_text.main" }}
          width={{ xs: "80px", md: "125px" }}
          fontSize={{ xs: "13px", md: "16px" }}
        >
          <NavLink
            to={route.path}
            className={({ isActive }) => (isActive ? "app-nav__active" : "")}
            style={{
              width: "100%",
              paddingBottom: "15px",
              boxSizing: "content-box",
              display: "inline-flex",
              justifyContent: "center",
            }}
          >
            {route.label}
          </NavLink>
        </Box>
      ))}
    </Stack>
  );
};

export default ReviewsNav;
