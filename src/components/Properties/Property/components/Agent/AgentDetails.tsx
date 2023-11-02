import React from "react";

import { useGoToUser } from "hooks/utils";

import { Stack, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

import { PropertyOwnerT } from "interface/db/properties.types";

interface AgentDetailsT {
  owner: PropertyOwnerT;
}

const AgentDetails: React.FC<AgentDetailsT> = ({ owner }) => {
  const { onGoToUser } = useGoToUser(owner._id);

  return (
    <>
      <Stack alignItems="center">
        <Typography
          fontSize={18}
          fontWeight={600}
          onClick={onGoToUser}
          textTransform="capitalize"
          sx={{
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          {owner.username}
        </Typography>

        <Typography color="app_text.main" fontSize={14}>
          {owner.email}
        </Typography>
      </Stack>

      {owner.location && (
        <Typography
          color="app_text.main"
          fontSize={14}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <LocationOn sx={{ fontSize: "18px" }} />
          {owner.location?.displayName}
        </Typography>
      )}

      <Typography fontWeight={600}>
        {owner.properties?.length} Properties
      </Typography>
    </>
  );
};

export default AgentDetails;
