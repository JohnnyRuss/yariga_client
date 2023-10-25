import React from "react";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import Rating from "./Rating";
import { Stack, Box, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

interface PropertyDetailsHeaderT {}

const PropertyDetailsHeader: React.FC<PropertyDetailsHeaderT> = (props) => {
  const { title, location, propertyType, price, propertyStatus } =
    useAppSelector(selectProperty);

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack gap="9px">
        <Typography textTransform="capitalize" fontSize={18} fontWeight={500}>
          {propertyType.label}
        </Typography>

        <Typography fontSize={22} fontWeight={500} textTransform="capitalize">
          {title}
        </Typography>

        <Typography
          fontSize={14}
          textTransform="capitalize"
          color="app_text.main"
          sx={{ display: "flex", alignItems: "center", gap: "2px" }}
        >
          <LocationOn sx={{ fontSize: "15px" }} />
          {location.displayName}
        </Typography>
      </Stack>

      <Box>
        <Stack gap="9px">
          <Rating />

          <Box>
            <Typography fontWeight={600}>Price</Typography>

            <Typography fontSize={25} fontWeight={700} color="app_blue.light">
              ${price}&nbsp;
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
        </Stack>
      </Box>
    </Stack>
  );
};

export default PropertyDetailsHeader;
