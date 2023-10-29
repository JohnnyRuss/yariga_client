import React from "react";

import { Box } from "@mui/material";
import { Pagination } from "components/Layouts";

const AgentsPagination: React.FC = () => {
  return (
    <Box style={{ paddingTop: "25px", alignSelf: "flex-end" }}>
      <Pagination page={1} />
    </Box>
  );
};

export default AgentsPagination;
