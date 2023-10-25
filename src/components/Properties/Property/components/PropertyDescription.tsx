import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import { Box, Stack, Typography } from "@mui/material";

const PropertyDescription: React.FC = () => {
  const { description } = useAppSelector(selectProperty);

  return (
    <Box mt="10px">
      <Typography mb="25px" fontSize={18} fontWeight={600}>
        Description
      </Typography>

      <Stack gap={1}>
        {description.split("\n").map((fragment) => (
          <Typography key={nanoid()}>{fragment}</Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyDescription;
