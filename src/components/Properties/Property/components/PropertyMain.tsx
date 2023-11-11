import React from "react";

import { Stack } from "@mui/material";

interface PropertyMainT {
  children: React.ReactNode;
}

const PropertyMain: React.FC<PropertyMainT> = ({ children }) => {
  return (
    <Stack width={{ xs: "100%", md: "75%" }} gap={2}>
      {children}
    </Stack>
  );
};

export default PropertyMain;
