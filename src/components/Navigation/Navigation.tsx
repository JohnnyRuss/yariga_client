import { Link } from "react-router-dom";

import { PATHS } from "config/paths";

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
      zIndex={999}
      top={0}
      overflow="hidden"
      boxSizing="border-box"
    >
      <Box component={Link} to={PATHS.root_page} position="relative">
        <h1>
          <span
            style={{
              opacity: 1,
              position: "absolute",
              transform: "translateY(-1000px)",
            }}
          >
            Yariga. Website helps people for RENT or SALE properties.
          </span>

          <figure>
            <img
              src={AppLogo.toString()}
              alt="yariga logo"
              loading="eager"
              width="100%"
              height="100%"
              title="Yariga"
            />
          </figure>
        </h1>
      </Box>

      <UserToolbar />
    </Stack>
  );
};

export default Navigation;
