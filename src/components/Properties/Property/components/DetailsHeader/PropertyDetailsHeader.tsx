import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import * as UI from "./components";
import { PropertyStatus } from "components/Layouts";
import { Stack, Box, Typography } from "@mui/material";

const PropertyDetailsHeader: React.FC<{ loading: boolean }> = ({ loading }) => {
  const {
    title,
    propertyType,
    propertyStatus,
    avgRating,
    _id: propertyId,
  } = useAppSelector(selectProperty);

  return loading ? (
    <UI.HeaderSkeleton />
  ) : (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Stack gap="9px" flexWrap="wrap">
        <Stack
          direction="row"
          alignItems="center"
          gap="15px"
          justifyContent={{ xs: "space-between", md: "flex-start" }}
        >
          <Typography textTransform="capitalize" fontSize={18} fontWeight={500}>
            {propertyType.label}
          </Typography>

          <PropertyStatus status={propertyStatus} />
        </Stack>

        <Typography fontSize={22} fontWeight={500} textTransform="capitalize">
          {title}
        </Typography>

        <UI.Location />
      </Stack>

      <Box sx={{ mt: ["12px", "0px"] }}>
        <Stack gap="9px">
          <UI.Rating rating={avgRating} propertyId={propertyId} />

          <Stack direction="row" gap="8px" alignItems="flex-end">
            <UI.PriceBox />

            <UI.PropertyDetailsHeaderActions />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default PropertyDetailsHeader;
