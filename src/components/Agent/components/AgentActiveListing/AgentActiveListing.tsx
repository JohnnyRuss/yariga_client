import React from "react";

import { Box } from "@mui/material";
import { PropertiesList } from "components/Layouts";
import ActiveListingHeader from "./ActiveListingHeader";

interface AgentActiveListingT {}

const AgentActiveListing: React.FC<AgentActiveListingT> = () => {
  return (
    <Box
      boxShadow={3}
      sx={{
        backgroundColor: "app_bg.main",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <ActiveListingHeader />

      <PropertiesList />
    </Box>
  );
};

export default AgentActiveListing;
