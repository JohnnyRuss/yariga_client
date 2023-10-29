import React from "react";

import { Stack } from "@mui/material";
import AgentsList from "./components/AgentsList";
import AgentsPagination from "./components/AgentsPagination";
import { ContentBox, SectionTitle } from "components/Layouts";

const Agents: React.FC = () => {
  return (
    <ContentBox>
      <SectionTitle title="Agents" />

      <Stack className="content__box">
        <AgentsList />

        <AgentsPagination />
      </Stack>
    </ContentBox>
  );
};

export default Agents;
