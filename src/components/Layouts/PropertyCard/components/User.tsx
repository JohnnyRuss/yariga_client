import React from "react";

import useGoToUser from "hooks/utils/useGoToUser";

import { Stack, Avatar, Typography } from "@mui/material";

import { PropertyOwnerShortT } from "interface/db/properties.types";

interface UserT {
  owner: PropertyOwnerShortT;
}

const User: React.FC<UserT> = ({ owner }) => {
  const { onGoToUser } = useGoToUser(owner._id);

  return (
    <Stack
      direction="row"
      gap={1}
      justifyContent="flex-start"
      flexWrap="wrap"
      width="100%"
    >
      <Avatar
        src={owner.avatar}
        alt={owner.username}
        sizes="30px 30px"
        imgProps={{
          style: {
            minWidth: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }}
      >
        {owner.username[0].toUpperCase()}
      </Avatar>

      <Stack width="max-content">
        <Typography
          fontWeight={600}
          textTransform="capitalize"
          onClick={onGoToUser}
          sx={{ ":hover": { textDecoration: "underline" } }}
        >
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
