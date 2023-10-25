import React from "react";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import { SVG } from "components/Layouts";
import { Box, Stack, Typography } from "@mui/material";
import { BedIcon, ShowerIcon, AreaIcon } from "assets/icons";

const PropertyFacilities: React.FC = () => {
  const { features, bedroomsAmount, bathroomsAmount, area } =
    useAppSelector(selectProperty);

  return (
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
        <Typography
          component="li"
          flexBasis="160px"
          textTransform="capitalize"
          fontWeight={500}
          color="app_text.main"
          sx={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <SVG src={BedIcon} width="16px" height="16px" />

          <Typography>{bedroomsAmount} Beds</Typography>
        </Typography>

        <Typography
          component="li"
          flexBasis="160px"
          textTransform="capitalize"
          fontWeight={500}
          color="app_text.main"
          sx={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <SVG src={ShowerIcon} width="16px" height="16px" />

          <Typography>{bathroomsAmount} Baths</Typography>
        </Typography>

        <Typography
          component="li"
          flexBasis="160px"
          textTransform="capitalize"
          fontWeight={500}
          color="app_text.main"
          sx={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <SVG src={AreaIcon} width="16px" height="16px" />

          <Typography>{area}M²</Typography>
        </Typography>

        {features.map((feature) => (
          <Typography
            key={feature._id}
            component="li"
            flexBasis="160px"
            textTransform="capitalize"
            fontWeight={500}
            color="app_text.main"
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <SVG src={feature.icon} width="16px" height="16px" />

            <Typography>{feature.label}</Typography>
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyFacilities;
