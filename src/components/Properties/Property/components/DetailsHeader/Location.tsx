import React from "react";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import { Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

const Location: React.FC = () => {
  const { location } = useAppSelector(selectProperty);

  return (
    <Typography
      fontSize={14}
      textTransform="capitalize"
      color="app_text.main"
      sx={{ display: "flex", alignItems: "center", gap: "2px" }}
    >
      <LocationOn sx={{ fontSize: "15px" }} />

      {location.displayName}
    </Typography>
  );
};

export default Location;
