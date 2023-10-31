import React from "react";

import { Stack } from "@mui/material";
import { SectionTitle, AddPropertyButton } from "components/Layouts";

const AllPropertiesHeader: React.FC = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <SectionTitle title="All Properties" />
      <AddPropertyButton />
    </Stack>
  );
};

export default AllPropertiesHeader;
