import React from "react";

import { Box, Stack, Typography, Button } from "@mui/material";

interface AgentActiveListingT {}

const AgentActiveListing: React.FC<AgentActiveListingT> = () => {
  return (
    <Box
      sx={{
        backgroundColor: "app_bg.main",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={18} fontWeight={600}>
          Active Listing
        </Typography>

        <Button
          variant="outlined"
          sx={{ color: "app_text.main", borderColor: "app_text.main" }}
        >
          View All
        </Button>
      </Stack>
    </Box>
  );
};

export default AgentActiveListing;
