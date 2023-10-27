import React from "react";

import { Stack } from "@mui/material";
import { ContentBox, SectionTitle } from "components/Layouts";

const UserProfile: React.FC = () => {
  return (
    <ContentBox>
      <SectionTitle title="User Profile" />

      <Stack className="content__box"></Stack>
    </ContentBox>
  );
};

export default UserProfile;
