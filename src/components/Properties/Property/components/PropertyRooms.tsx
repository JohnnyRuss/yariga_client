import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import {
  selectProperty,
  selectPropertyRoomTypes,
} from "store/selectors/properties.selectors";

import { Check, Close } from "@mui/icons-material";
import { Box, Stack, Typography, Skeleton } from "@mui/material";

const PropertyRooms: React.FC<{ loading: boolean }> = ({ loading }) => {
  const rooms = useAppSelector(selectProperty).rooms.map((room) => room._id);
  const allRoomTypes = useAppSelector(selectPropertyRoomTypes);

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
        Rooms
      </Typography>

      <Stack
        component="ul"
        direction="row"
        flexWrap="wrap"
        gap="20px 50px"
        sx={{ listStyle: "none" }}
      >
        {allRoomTypes.map((type) => (
          <Typography
            key={type._id}
            component="li"
            flexBasis="180px"
            textTransform="capitalize"
            fontWeight={500}
            color="app_text.main"
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {rooms.includes(type._id) ? (
              <Check sx={{ color: "app_green.main" }} />
            ) : (
              <Close sx={{ color: "error.main" }} />
            )}
            {type.label}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyRooms;
