import React from "react";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import { Box, Typography } from "@mui/material";

const PriceBox: React.FC = () => {
  const { price, propertyStatus } = useAppSelector(selectProperty);

  return (
    <Box>
      <Typography fontWeight={600}>Price</Typography>

      <Typography fontSize={25} fontWeight={700} color="app_blue.light">
        ${price.toLocaleString()}&nbsp;
        {propertyStatus === "RENT" && (
          <Typography
            component="small"
            textTransform="capitalize"
            color="app_text.main"
            fontSize={14}
          >
            per day
          </Typography>
        )}
      </Typography>
    </Box>
  );
};

export default PriceBox;
