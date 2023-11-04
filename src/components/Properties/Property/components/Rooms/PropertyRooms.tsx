import React from "react";
import { useAppSelector } from "store/hooks";

import {
  selectRoomTypes,
  selectRoomTypesStatus,
} from "store/selectors/roomTypes.selectors";
import { selectProperty } from "store/selectors/properties.selectors";

import RoomsSkeleton from "./RoomsSkeleton";

import RoomItem from "./RoomItem";
import { Box, Stack, Typography } from "@mui/material";

const PropertyRooms: React.FC<{ loading: boolean }> = ({ loading }) => {
  const status = useAppSelector(selectRoomTypesStatus);

  const allRoomTypes = useAppSelector(selectRoomTypes);

  const rooms = useAppSelector(selectProperty).rooms.map((room) => room._id);

  return loading || status.loading ? (
    <RoomsSkeleton />
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
          <RoomItem
            room={type}
            key={type._id}
            isAvailable={rooms.includes(type._id)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyRooms;
