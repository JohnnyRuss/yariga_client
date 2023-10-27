import React from "react";

import {
  AgentCard,
  ContentBox,
  Pagination,
  SectionTitle,
} from "components/Layouts";
import { Grid, Box, Stack } from "@mui/material";

const Agents: React.FC = () => {
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
          <Grid item xs={12} sm={6}>
            <AgentCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AgentCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AgentCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AgentCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AgentCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AgentCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AgentCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AgentCard />
          </Grid>
        </Grid>

        <Box style={{ paddingTop: "25px", alignSelf: "flex-end" }}>
          <Pagination page={1} />
        </Box>
      </Stack>
    </ContentBox>
  );
};

export default Agents;
