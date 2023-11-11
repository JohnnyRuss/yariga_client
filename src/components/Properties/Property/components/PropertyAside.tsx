import React from "react";

import { Stack } from "@mui/material";

interface PropertyAsideT {
  children: React.ReactNode;
}

const PropertyAside: React.FC<PropertyAsideT> = ({ children }) => {
  return (
    <Stack
      width={{ xs: "100%", md: "25%" }}
      gap={3}
      justifyContent="flex-start"
      position="sticky"
      top="70px"
      height="90vh"
      p="4px"
      sx={{
        overflowY: ["visible", "auto"],
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
