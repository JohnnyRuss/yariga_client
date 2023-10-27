import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import { Box, Stack, Typography, Skeleton } from "@mui/material";

const PropertyDescription: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { description } = useAppSelector(selectProperty);

  return loading ? (
    <Box mt="10px">
      <Skeleton
        variant="text"
        width="150px"
        sx={{ fontSize: 18, marginBottom: "25px" }}
      />

      <Stack flexWrap="wrap" gap="20px 50px">
        {Array.from(new Array(3)).map(() => {
          return Array.from(new Array(4)).map((_, index, arr) => (
            <Skeleton
              key={nanoid()}
              width={index === arr.length - 1 ? "50%" : "100%"}
            />
          ));
        })}
      </Stack>
    </Box>
  ) : (
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
