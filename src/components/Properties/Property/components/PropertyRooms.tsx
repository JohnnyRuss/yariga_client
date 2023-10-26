import React from "react";
import { useAppSelector } from "store/hooks";

import {
  selectProperty,
  selectPropertyRoomTypes,
} from "store/selectors/properties.selectors";

import { Box, Stack, Typography } from "@mui/material";
import { Check, Close } from "@mui/icons-material";

const PropertyRooms: React.FC = () => {
  const rooms = useAppSelector(selectProperty).rooms.map((room) => room._id);
  const allRoomTypes = useAppSelector(selectPropertyRoomTypes);

  return (
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
