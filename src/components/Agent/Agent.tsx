import { useAppSelector } from "store/hooks";

import { selectAgentStatus } from "store/selectors/agent.selectors";

import * as UI from "./components";
import { Box, Grid, useTheme } from "@mui/material";
import { ContentBox, GoBackButton } from "components/Layouts";

const Agent: React.FC = () => {
  const theme = useTheme();
  const status = useAppSelector(selectAgentStatus);

  return (
    <ContentBox>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          sx={{
            [theme.breakpoints.down("app_mobile")]: {
              position: "absolute",
              zIndex: 1,
              top: "30px",
              left: "10px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
            },
          }}
          bgcolor={{ xs: "app_bg.main", app_mobile: "transparent" }}
        >
          <GoBackButton>Agent Details</GoBackButton>
        </Box>
      </Box>

      <Box
        p={{ xs: "0px 0px 5px 0px", md: "20px" }}
        bgcolor={{ xs: "app_bg.main", app_mobile: "transparent" }}
      >
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
