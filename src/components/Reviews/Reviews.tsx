import React from "react";

import { Stack } from "@mui/material";
import { ContentBox, SectionTitle } from "components/Layouts";

const Reviews: React.FC = () => {
  return (
    <ContentBox>
      <SectionTitle title="Review List" />

      <Stack className="content__box"></Stack>
    </ContentBox>
  );
};

export default Reviews;
