import React from "react";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import FacilityItem from "./FacilityItem";
import FacilitiesSkeleton from "./FacilitiesSkeleton";
import { Box, Stack, Typography } from "@mui/material";
import { BedIcon, ShowerIcon, AreaIcon } from "assets/icons";

const PropertyFacilities: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { features, bedroomsAmount, bathroomsAmount, area } =
    useAppSelector(selectProperty);

  return loading ? (
    <FacilitiesSkeleton />
  ) : (
    <Box mt="10px">
      <Typography mb="25px" fontSize={18} fontWeight={600}>
        Facilities
      </Typography>

      <Stack
        component="ul"
        direction="row"
        flexWrap="wrap"
        gap="20px 50px"
        sx={{ listStyle: "none" }}
      >
        <FacilityItem icon={BedIcon} label={`${bedroomsAmount} Beds`} />

        <FacilityItem icon={ShowerIcon} label={`${bathroomsAmount} Baths`} />

        <FacilityItem icon={AreaIcon} label={`${area}M²`} />

        {features.map((feature) => (
          <FacilityItem
            icon={feature.icon}
            label={feature.label}
            key={feature._id}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyFacilities;
