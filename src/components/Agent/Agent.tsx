import React from "react";
import { useAppSelector } from "store/hooks";

import { selectAgentStatus } from "store/selectors/agent.selectors";

import { Box, Grid } from "@mui/material";
import { ContentBox, GoBackButton } from "components/Layouts";
import AgentDetails from "./components/AgentDetails/AgentDetails";
import AgentCredentials from "./components/AgentCredentials/AgentCredentials";
import AgentActiveListing from "./components/AgentActiveListing/AgentActiveListing";

const Agent: React.FC = () => {
  const status = useAppSelector(selectAgentStatus);

  return (
    <ContentBox>
      <GoBackButton>Agent Details</GoBackButton>

      <Box p="20px">
        <Grid
          container
          spacing="25px"
          height="100%"
          alignContent="start"
          justifyContent="space-between"
        >
          <Grid item xs={3}>
            <AgentCredentials loading={status.loading} />
          </Grid>

          <Grid item xs={9}>
            <AgentDetails loading={status.loading} />
          </Grid>

          <Grid item xs={12}>
            <AgentActiveListing />
          </Grid>
        </Grid>
      </Box>
    </ContentBox>
  );
};

export default Agent;
