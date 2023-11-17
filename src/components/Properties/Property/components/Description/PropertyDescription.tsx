import React from "react";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import DescriptionSkeleton from "./DescriptionSkeleton";
import { Box, Typography } from "@mui/material";
import { Text } from "components/Layouts";

const PropertyDescription: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { description } = useAppSelector(selectProperty);

  return loading ? (
    <DescriptionSkeleton />
  ) : (
    <Box mt="10px">
      <Typography mb="25px" fontSize={18} fontWeight={600}>
        Description
      </Typography>

      <Text text={description} />
    </Box>
  );
};

export default PropertyDescription;
