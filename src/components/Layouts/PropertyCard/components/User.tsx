import React from "react";
import { Link } from "react-router-dom";

import { useUserPath } from "hooks/utils";

import { Stack, Avatar, Typography } from "@mui/material";

import { PropertyOwnerT } from "interface/db/properties.types";

interface UserT {
  owner: PropertyOwnerT;
}

const User: React.FC<UserT> = ({ owner }) => {
  const { userPath } = useUserPath(owner._id);

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
        <Link to={userPath}>
          <Typography
            textTransform="capitalize"
            fontWeight={600}
            sx={{ ":hover": { textDecoration: "underline" } }}
          >
            {owner.username}
          </Typography>
        </Link>

        <Typography fontSize={13} mt="-3px">
          {owner.email}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default User;
