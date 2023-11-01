import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import {
  selectAllAgents,
  selectAgentsStatus,
} from "store/selectors/agent.selectors";

import { Grid } from "@mui/material";
import { AgentCard, AgentCardSkeleton } from "components/Layouts";

const AgentsList: React.FC = () => {
  const allAgents = useAppSelector(selectAllAgents);
  const status = useAppSelector(selectAgentsStatus);

  return (
    <Grid
      container
      height="100%"
      spacing="25px"
      alignContent="start"
      justifyContent="space-between"
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
  );
};

export default AgentsList;
