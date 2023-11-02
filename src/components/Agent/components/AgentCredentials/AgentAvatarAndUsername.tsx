import React from "react";

import { Typography, Stack, Box, Avatar } from "@mui/material";

interface AgentAvatarAndUsernameT {
  username: string;
  avatar: string;
}

const AgentAvatarAndUsername: React.FC<AgentAvatarAndUsernameT> = ({
  avatar,
  username,
}) => {
  return (
    <Stack direction="row" gap={2}>
      <Avatar sx={{ width: "100px", height: "100px" }} src={avatar} />

      <Box mt="50px">
        <Typography fontWeight={600}>{username}</Typography>

        <Typography fontSize={14} color="app_text.main">
          Agent
        </Typography>
      </Box>
    </Stack>
  );
};

export default AgentAvatarAndUsername;
