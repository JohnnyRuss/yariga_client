import React from "react";
import { useNavigate } from "react-router-dom";

import { paths } from "config/paths";
import useIsAuthenticatedUser from "hooks/utils/useIsAuthenticatedUser";

import { AddPropertyButton } from "components/Layouts";
import { Stack, Typography, Button as MuiButton } from "@mui/material";

interface UserPropertiesHeaderT {
  userId: string;
}

const UserPropertiesHeader: React.FC<UserPropertiesHeaderT> = ({ userId }) => {
  const navigate = useNavigate();

  const { isAuthenticatedUser } = useIsAuthenticatedUser(userId);

  const searchParams = new URLSearchParams(window.location.search);

  const onViewAllProperties = () => {
    searchParams.set("user", userId);
    navigate(`${paths.properties_page}?${searchParams.toString()}`);
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={18} fontWeight={600}>
        Your Properties
      </Typography>

      <Stack direction="row" alignItems="center" gap={3}>
        <MuiButton
          variant="outlined"
          onClick={onViewAllProperties}
          sx={{ color: "app_text.main", borderColor: "app_text.main" }}
        >
          View All Properties
        </MuiButton>

        {isAuthenticatedUser && <AddPropertyButton />}
      </Stack>
    </Stack>
  );
};

export default UserPropertiesHeader;
