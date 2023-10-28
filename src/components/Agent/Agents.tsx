import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import {
  selectAllAgents,
  selectAgentStatus,
} from "store/selectors/agent.selectors";

import {
  AgentCard,
  ContentBox,
  Pagination,
  SectionTitle,
} from "components/Layouts";
import { Grid, Box, Stack } from "@mui/material";
import AgentCardSkeleton from "components/Layouts/AgentCard/AgentCardSkeleton";

const Agents: React.FC = () => {
  const allAgents = useAppSelector(selectAllAgents);
  const status = useAppSelector(selectAgentStatus);

  return (
    <ContentBox>
      <SectionTitle title="Agents" />

      <Stack className="content__box">
        <Grid
          container
          height="100%"
          alignContent="start"
          justifyContent="space-between"
          spacing="25px"
        >
          {status.loading &&
            Array.from(new Array(12)).map(() => (
              <Grid item xs={12} sm={6} key={nanoid()}>
                <AgentCardSkeleton />
              </Grid>
            ))}

          {!status.loading &&
            allAgents.map((agent) => (
              <Grid item xs={12} sm={6} key={agent._id}>
                <AgentCard agent={agent} />
              </Grid>
            ))}
        </Grid>

        <Box style={{ paddingTop: "25px", alignSelf: "flex-end" }}>
          <Pagination page={1} />
        </Box>
      </Stack>
    </ContentBox>
  );
};

export default Agents;
