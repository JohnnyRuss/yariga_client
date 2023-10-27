import React from "react";
import { useNavigate } from "react-router-dom";

import paths from "config/paths";

import { Add } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Button, SectionTitle } from "components/Layouts";

const AllPropertiesHeader: React.FC = () => {
  const navigate = useNavigate();

  const onAddProperty = () => navigate(paths.create_property_page);

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <SectionTitle title="All Properties" />

      <Button
        title="Add Property"
        onClick={onAddProperty}
        bgColor="app_blue.light"
        color="app_text.light"
        icon={<Add />}
      />
    </Stack>
  );
};

export default AllPropertiesHeader;
