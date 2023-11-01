import React from "react";

import { Typography } from "@mui/material";
import { Check, Close } from "@mui/icons-material";

import { RoomTypeT } from "interface/db/properties.types";

interface RoomItemT {
  room: RoomTypeT;
  isAvailable: boolean;
}

const RoomItem: React.FC<RoomItemT> = ({ room, isAvailable }) => {
  return (
    <Typography
      component="li"
      flexBasis="180px"
      textTransform="capitalize"
      fontWeight={500}
      color="app_text.main"
      sx={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      {isAvailable ? (
        <Check sx={{ color: "app_green.main" }} />
      ) : (
        <Close sx={{ color: "error.main" }} />
      )}
      {room.label}
    </Typography>
  );
};

export default RoomItem;
