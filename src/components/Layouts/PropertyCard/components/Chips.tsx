import React from "react";

import { Stack, Chip } from "@mui/material";

interface ChipsT {
  addressType: string;
  propertyType: string;
}

const Chips: React.FC<ChipsT> = ({ addressType, propertyType }) => {
  return (
    <Stack direction="row" justifyContent="center" gap={1} alignItems="center">
      <Chip
        label={addressType}
        variant="outlined"
        color="success"
        sx={{ flex: 1, textTransform: "capitalize" }}
        title="Address type"
      />

      <Chip
        label={propertyType}
        variant="outlined"
        color="success"
        sx={{ flex: 1, textTransform: "capitalize" }}
        title="Property type"
      />
    </Stack>
  );
};

export default Chips;
