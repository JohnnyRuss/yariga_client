import { useGoToUser } from "hooks/utils";

import { UserRoleChip } from "components/Layouts";
import { LocationOn } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

import { PropertyOwnerT } from "interface/db/properties.types";

interface AgentDetailsT {
  owner: PropertyOwnerT;
  isAgent: boolean;
}

const AgentDetails: React.FC<AgentDetailsT> = ({ owner, isAgent }) => {
  const { onGoToUser } = useGoToUser(owner._id, isAgent);

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
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexDirection: ["column", "row"],
          }}
        >
          <LocationOn sx={{ fontSize: "18px" }} />
          {owner.location?.displayName}
        </Typography>
      )}

      <UserRoleChip role={isAgent ? "AGENT" : "USER"} />

      <Typography fontWeight={600}>
        {owner.properties?.length} Properties
      </Typography>
    </>
  );
};

export default AgentDetails;
