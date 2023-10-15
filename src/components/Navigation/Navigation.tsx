import React from "react";
import { Link } from "react-router-dom";

import paths from "config/paths";

import { yariga } from "assets";
import UserToolbar from "./UserToolbar";
import { Stack, Box } from "@mui/material";

interface NavigationT {}

const Navigation: React.FC<NavigationT> = (props) => {
  return (
    <Stack
      component="nav"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="8px 15px"
      height="56px"
      bgcolor="app_bg.main"
      position="sticky"
      zIndex={99}
      top={0}
      overflow="hidden"
      boxSizing="border-box"
    >
      <Box component={Link} to={paths.root_page}>
        <figure>
          <img src={yariga} alt="yariga logo" />
        </figure>
      </Box>

      <UserToolbar />
    </Stack>
  );
};

export default Navigation;
