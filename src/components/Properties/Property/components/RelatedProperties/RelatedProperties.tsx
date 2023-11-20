/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";

import {
  selectProperty,
  selectRelatedProperties,
  // selectRelatedPropertiesStatus,
} from "store/selectors/properties.selectors";
import { usePropertiesQuery } from "hooks/api/properties";

import { Box, Typography } from "@mui/material";
import { MultiSlider, PropertyCardVertical } from "components/Layouts";

const RelatedProperties: React.FC = () => {
  // const status = useAppSelector(selectRelatedPropertiesStatus);
  const properties = useAppSelector(selectRelatedProperties);
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
    <Box flex={1}>
      <Typography
        mb="25px"
        fontSize={18}
        fontWeight={600}
        sx={{ transform: "translateY(55%)" }}
      >
        Related Properties
      </Typography>

      <MultiSlider
      // render={(Slide) =>
      //   properties.map((property) => (
      //     <Slide key={property._id}>
      //       <PropertyCardVertical property={property} />
      //     </Slide>
      //   ))
      // }
      />
    </Box>
  );
};

export default RelatedProperties;
