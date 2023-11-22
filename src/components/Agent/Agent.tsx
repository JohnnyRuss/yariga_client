import { useAppSelector } from "store/hooks";

import { selectAgentStatus } from "store/selectors/agent.selectors";

import * as UI from "./components";
import { Box, Grid } from "@mui/material";
import { ContentBox, GoBackButton } from "components/Layouts";

const Agent: React.FC = () => {
  const status = useAppSelector(selectAgentStatus);

  return (
    <ContentBox>
      <GoBackButton>Agent Details</GoBackButton>

      <Box p={{ xs: "15px 0px", md: "20px" }}>
        <Grid
          container
          spacing="25px"
          height="100%"
          alignContent="start"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={3}>
            <UI.AgentCredentials loading={status.loading} />
          </Grid>

          <Grid item xs={12} md={9}>
            <UI.AgentDetails loading={status.loading} />
          </Grid>

          <Grid item xs={12} md={12}>
            <UI.AgentActiveListing />
          </Grid>
        </Grid>
      </Box>
    </ContentBox>
  );
};

export default Agent;
