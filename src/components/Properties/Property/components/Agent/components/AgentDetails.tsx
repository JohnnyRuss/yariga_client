import { useGoToUser } from "hooks/utils";

import { LocationOn } from "@mui/icons-material";
import { Stack, Typography, Box } from "@mui/material";

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

      <Box
        px={1.5}
        py={0.5}
        borderRadius={1}
        bgcolor={isAgent ? "success.light" : "info.light"}
        height="fit-content"
      >
        <Typography fontSize={12} fontWeight={600} color="app_text.light">
          {isAgent ? "AGENT" : "OWNER"}
        </Typography>
      </Box>

      <Typography fontWeight={600}>
        {owner.properties?.length} Properties
      </Typography>
    </>
  );
};

export default AgentDetails;
