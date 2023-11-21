/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";

import {
  selectProperty,
  selectRelatedPropertiesStatus,
} from "store/selectors/properties.selectors";
import { usePropertiesQuery } from "hooks/api/properties";

import Slider from "./Slider";
import { Box, Typography } from "@mui/material";

const RelatedProperties: React.FC = () => {
  const status = useAppSelector(selectRelatedPropertiesStatus);

  const { rooms, features, _id } = useAppSelector(selectProperty);

  const { getRelatedProperties, cleanUpRelatedProperties } =
    usePropertiesQuery();

  useEffect(() => {
    const roomIds = rooms.map((room) => room._id);
    const featureIds = features.map((feature) => feature._id);

    if (!roomIds[0] && !featureIds[0]) return;

    getRelatedProperties({ roomIds, featureIds, activePropertyId: _id });

    return () => {
      cleanUpRelatedProperties();
    };
  }, []);

  return (
    <Box>
      <Typography
        mb="25px"
        fontSize={18}
        fontWeight={600}
        sx={{ transform: "translateY(55%)" }}
      >
        Related Properties
      </Typography>

      {!status.loading && <Slider />}
    </Box>
  );
};

export default RelatedProperties;
