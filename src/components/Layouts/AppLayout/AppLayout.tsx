import React from "react";

import { Aside } from "components/Aside";
import { Navigation } from "components/Navigation";
import { styled, Box } from "@mui/material";

const MainContainerBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const BodyContainer = styled(Box)(() => ({
  display: "flex",
  gap: "15px",
  alignItems: "flex-start",
}));

const ContentContainerBox = styled(Box)(() => ({
  flex: 1,
  padding: "5px",
}));

interface AppLayoutT {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutT> = ({ children }) => {
  return (
    <MainContainerBox>
      <Navigation />

      <BodyContainer>
        <Aside />
        <ContentContainerBox>{children}</ContentContainerBox>
      </BodyContainer>
    </MainContainerBox>
  );
};

export default AppLayout;
