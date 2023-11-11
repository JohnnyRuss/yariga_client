import React from "react";
import { useNavigate } from "react-router-dom";

import { dynamic_paths, paths } from "config/paths";
import useIsAuthenticatedUser from "hooks/utils/useIsAuthenticatedUser";

import { AddPropertyButton } from "components/Layouts";
import { Stack, Typography, Button as MuiButton } from "@mui/material";

interface UserPropertiesHeaderT {
  userId: string;
  username: string;
}

const UserPropertiesHeader: React.FC<UserPropertiesHeaderT> = ({
  userId,
  username,
}) => {
  const navigate = useNavigate();

  const { isAuthenticatedUser } = useIsAuthenticatedUser(userId);

  const onViewAllProperties = () =>
    navigate(
      isAuthenticatedUser
        ? paths.iuser_properties_page
        : dynamic_paths.user_properties_page(userId)
    );

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "flex-start", md: "center" }}
      gap={{ xs: 2, md: 0 }}
      width="100%"
      justifyContent="space-between"
    >
      <Typography fontSize={18} fontWeight={600} textTransform="capitalize">
        {username} Properties
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        gap={{ xs: 2, md: 3 }}
        width={{ xs: "100%", md: "fit-content" }}
      >
        <MuiButton
          variant="outlined"
          onClick={onViewAllProperties}
          sx={{
            color: "app_text.main",
            borderColor: "app_text.main",
            width: ["100%", "fit-content"],
          }}
        >
          View All Properties
        </MuiButton>

        {isAuthenticatedUser && <AddPropertyButton />}
      </Stack>
    </Stack>
  );
};

export default UserPropertiesHeader;
