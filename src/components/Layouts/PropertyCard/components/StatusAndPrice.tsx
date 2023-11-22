import { PropertyStatus } from "components/Layouts";
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

      <PropertyStatus status={status} />
    </Stack>
  );
};

export default StatusAndPrice;
