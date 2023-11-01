import React from "react";

import { Stack, Typography, Button } from "@mui/material";

interface ActiveListingHeaderT {}

const ActiveListingHeader: React.FC<ActiveListingHeaderT> = () => {
  return (
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
  );
};

export default ActiveListingHeader;
