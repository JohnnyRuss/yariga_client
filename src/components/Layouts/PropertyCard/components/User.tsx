import React from "react";

import { Stack, Avatar, Typography } from "@mui/material";

import { PropertyOwnerT } from "interface/db/properties.types";
interface UserT {
  owner: PropertyOwnerT;
}

const User: React.FC<UserT> = ({ owner }) => {
  return (
    <Stack direction="row" gap={1} py={1}>
      <Avatar
        src={owner.avatar}
        alt={owner.username}
        sx={{ width: 32, height: 32 }}
      >
        {owner.username[0].toUpperCase()}
      </Avatar>
      <Stack>
        <Typography textTransform="capitalize" fontWeight={600}>
          {owner.username}
        </Typography>
        <Typography fontSize={13} mt="-3px">
          {owner.email}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default User;
