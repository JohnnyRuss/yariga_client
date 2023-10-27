import React from "react";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import Rating from "./Rating";
import { PropertyStatus } from "components/Layouts";
import { LocationOn } from "@mui/icons-material";
import { Stack, Box, Typography, Skeleton } from "@mui/material";

const PropertyDetailsHeader: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { title, location, propertyType, price, propertyStatus } =
    useAppSelector(selectProperty);

  return loading ? (
    <Stack direction="row" justifyContent="space-between">
      <Stack gap="9px" width="100%">
        <Stack direction="row" alignItems="center" gap="15px">
          <Skeleton variant="text" width="200px" sx={{ fontSize: 18 }} />

          <Skeleton variant="text" width="100px" sx={{ fontSize: 18 }} />
        </Stack>

        <Skeleton variant="text" width="50%" sx={{ fontSize: 22 }} />

        <Skeleton variant="text" width="35%" sx={{ fontSize: 14 }} />
      </Stack>

      <Box>
        <Stack gap="9px">
          <Stack direction="row" alignItems="center" gap={2} width={200}>
            <Skeleton width="80%" />

            <Skeleton width="20%" />
          </Stack>

          <Box>
            <Skeleton variant="text" width="80px" />

            <Skeleton variant="text" width="150px" sx={{ fontSize: 25 }} />
          </Box>
        </Stack>
      </Box>
    </Stack>
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
