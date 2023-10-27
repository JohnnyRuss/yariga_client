import React from "react";

import { Box, Grid } from "@mui/material";
import { ContentBox, GoBackButton } from "components/Layouts";
import AgentDetails from "./components/AgentDetails";
import AgentCredentials from "./components/AgentCredentials";
import AgentActiveListing from "./components/AgentActiveListing";

const Agent: React.FC = () => {
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
            <AgentCredentials />
          </Grid>

          <Grid item xs={9}>
            <AgentDetails />
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
