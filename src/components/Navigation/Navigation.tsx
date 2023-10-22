import React from "react";
import { Link } from "react-router-dom";

import paths from "config/paths";

import { AppLogo } from "assets";
import UserToolbar from "./UserToolbar";
import { Stack, Box } from "@mui/material";

const Navigation: React.FC = () => {
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
          <img src={AppLogo.toString()} alt="yariga logo" />
        </figure>
      </Box>

      <UserToolbar />
    </Stack>
  );
};

export default Navigation;
