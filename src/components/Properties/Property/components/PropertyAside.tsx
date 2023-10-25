import React from "react";

import { Stack } from "@mui/material";

interface PropertyAsideT {
  children: React.ReactNode;
}

const PropertyAside: React.FC<PropertyAsideT> = ({ children }) => {
  return (
    <Stack
      width="25%"
      gap={3}
      justifyContent="flex-start"
      position="sticky"
      top="70px"
      height="90vh"
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {children}
    </Stack>
  );
};

export default PropertyAside;
