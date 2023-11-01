import React from "react";

import MapBox from "./MapBox";
import { Skeleton } from "@mui/material";

const MapSkeleton: React.FC = () => {
  return (
    <MapBox>
      <Skeleton variant="rectangular" width="100%" height="100%" />
    </MapBox>
  );
};

export default MapSkeleton;
