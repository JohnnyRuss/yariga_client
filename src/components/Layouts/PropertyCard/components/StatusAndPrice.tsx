import React from "react";

import { Typography, Box, Stack } from "@mui/material";

import { PropertyShortInfoT } from "interface/db/properties.types";
interface StatusAndPriceT {
  price: PropertyShortInfoT["price"];
  status: PropertyShortInfoT["propertyStatus"];
}

const StatusAndPrice: React.FC<StatusAndPriceT> = ({ price, status }) => {
  return (
    <Stack direction="row" justifyContent="space-between" width="100%">
      <Box
        px={1.5}
        py={0.5}
        borderRadius={1}
        bgcolor="#dadefa"
        height="fit-content"
      >
        <Typography fontSize={12} fontWeight={600} color="app_blue.light">
          ${price.toLocaleString()}
        </Typography>
      </Box>

      <Box
        px={1.5}
        py={0.5}
        borderRadius={1}
        bgcolor={status === "RENT" ? "success.light" : "info.light"}
        height="fit-content"
      >
        <Typography fontSize={12} fontWeight={600} color="app_text.light">
          {status}
        </Typography>
      </Box>
    </Stack>
  );
};

export default StatusAndPrice;