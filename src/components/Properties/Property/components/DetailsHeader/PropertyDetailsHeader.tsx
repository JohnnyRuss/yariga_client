import React from "react";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import Rating from "./Rating";
import PriceBox from "./PriceBox";
import Location from "./Location";
import HeaderSkeleton from "./HeaderSkeleton";
import { PropertyStatus } from "components/Layouts";
import { Stack, Box, Typography } from "@mui/material";

const PropertyDetailsHeader: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { title, propertyType, propertyStatus } =
    useAppSelector(selectProperty);

  return loading ? (
    <HeaderSkeleton />
  ) : (
    <Stack direction="row" justifyContent="space-between">
      <Stack gap="9px">
        <Stack direction="row" alignItems="center" gap="15px">
          <Typography textTransform="capitalize" fontSize={18} fontWeight={500}>
            {propertyType.label}
          </Typography>

          <PropertyStatus status={propertyStatus} />
        </Stack>

        <Typography fontSize={22} fontWeight={500} textTransform="capitalize">
          {title}
        </Typography>

        <Location />
      </Stack>

      <Box>
        <Stack gap="9px">
          <Rating />

          <PriceBox />
        </Stack>
      </Box>
    </Stack>
  );
};

export default PropertyDetailsHeader;
