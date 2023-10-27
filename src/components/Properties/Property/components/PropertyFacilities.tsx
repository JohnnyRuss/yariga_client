import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import { SVG } from "components/Layouts";
import { BedIcon, ShowerIcon, AreaIcon } from "assets/icons";
import { Box, Stack, Typography, Skeleton } from "@mui/material";

const PropertyFacilities: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { features, bedroomsAmount, bathroomsAmount, area } =
    useAppSelector(selectProperty);

  return loading ? (
    <Box mt="10px">
      <Skeleton
        variant="text"
        width="150px"
        sx={{ fontSize: 18, marginBottom: "25px" }}
      />

      <Stack direction="row" flexWrap="wrap" gap="20px 50px">
        {Array.from(new Array(12)).map(() => (
          <Skeleton key={nanoid()} sx={{ flexBasis: "180px" }} />
        ))}
      </Stack>
    </Box>
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
