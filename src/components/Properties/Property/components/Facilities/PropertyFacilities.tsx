import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import * as UI from "./components";
import { Box, Stack, Typography } from "@mui/material";
import { BedIcon, ShowerIcon, AreaIcon } from "assets/icons";

const PropertyFacilities: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { features, bedroomsAmount, bathroomsAmount, area } =
    useAppSelector(selectProperty);

  return loading ? (
    <UI.FacilitiesSkeleton />
  ) : (
    <Box mt="10px">
      <Typography mb="25px" fontSize={18} fontWeight={600}>
        Facilities
      </Typography>

      <Stack
        component="ul"
        direction="row"
        flexWrap="wrap"
        gap={{ xs: "10px 20px", md: "20px 50px" }}
        sx={{ listStyle: "none" }}
      >
        <UI.FacilityItem icon={BedIcon} label={`${bedroomsAmount} Beds`} />

        <UI.FacilityItem icon={ShowerIcon} label={`${bathroomsAmount} Baths`} />

        <UI.FacilityItem icon={AreaIcon} label={`${area}M²`} />

        {features.map((feature) => (
          <UI.FacilityItem
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
