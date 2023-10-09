import React from "react";

import { Box, Typography } from "@mui/material";
import { CreatePropertyForm } from "./components/Form";

const CreateProperty: React.FC = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Create Property
      </Typography>

      <CreatePropertyForm />
    </Box>
  );
};

export default CreateProperty;
