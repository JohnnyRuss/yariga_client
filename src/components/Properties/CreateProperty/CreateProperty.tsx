import React from "react";

import { Typography } from "@mui/material";
import { ContentBox } from "components/Layouts";
import CreatePropertyForm from "./components/CreatePropertyForm";

const CreateProperty: React.FC = () => {
  return (
    <ContentBox>
      <Typography fontSize={25} fontWeight={700} color="app_text.dark">
        Create Property
      </Typography>

      <CreatePropertyForm />
    </ContentBox>
  );
};

export default CreateProperty;
