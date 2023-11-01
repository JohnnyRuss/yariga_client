import React from "react";

import { Stack, Typography } from "@mui/material";

interface AgentCredentialsItemT {
  label: string;
  value: string;
}

const AgentCredentialsItem: React.FC<AgentCredentialsItemT> = ({
  label,
  value,
}) => {
  return (
    <Stack direction="row">
      <Typography width="25%" color="app_text.main" fontSize={14}>
        {label}:
      </Typography>

      <Typography width="75%" fontSize={14} fontWeight={600}>
        {value}
      </Typography>
    </Stack>
  );
};

export default AgentCredentialsItem;
