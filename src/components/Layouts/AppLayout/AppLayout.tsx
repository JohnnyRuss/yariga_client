import React from "react";

import { Aside } from "components/Aside";
import { styled, Box } from "@mui/material";

const ContainerBox = styled(Box)(() => ({
  display: "flex",
  gap: "15px",
}));

const ContentContainerBox = styled(Box)(() => ({
  flex: 1,
}));

interface AppLayoutT {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutT> = ({ children }) => {
  return (
    <ContainerBox>
      <Aside />
      <ContentContainerBox>{children}</ContentContainerBox>
    </ContainerBox>
  );
};

export default AppLayout;
