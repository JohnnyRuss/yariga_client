import React from "react";
import { useNavigate } from "react-router-dom";

import paths from "config/paths";

import { Add } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import {
  Button,
  //  PropertyCard
} from "components/Layouts";

const AllProperties: React.FC = () => {
  const navigate = useNavigate();

  const onAddProperty = () => navigate(paths.create_property_page);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="app_text.dark">
          All Properties
        </Typography>

        <Button
          title="Add Property"
          onClick={onAddProperty}
          bgColor="app_blue.light"
          color="app_text.light"
          icon={<Add />}
        />
      </Stack>
    </Box>
  );
};

export default AllProperties;
