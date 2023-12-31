import { Box, Typography } from "@mui/material";

import { PROPERTY_STATUS } from "interface/db/properties.types";

interface PropertyStatusT {
  status: keyof typeof PROPERTY_STATUS;
}

const PropertyStatus: React.FC<PropertyStatusT> = ({ status }) => {
  return (
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
  );
};

export default PropertyStatus;
