import React from "react";

import { Stack, Typography } from "@mui/material";
import { Place } from "@mui/icons-material";

interface LocationT {
  location: string;
}

const Location: React.FC<LocationT> = ({ location }) => {
  return (
    <Stack direction="row" gap={0.5} alignItems="flex-start">
      <Place sx={{ fontSize: 18, color: "app_text.dark" }} />

      <Typography fontSize={14} color="app_text.main">
        {location}
      </Typography>
    </Stack>
  );
};

export default Location;
