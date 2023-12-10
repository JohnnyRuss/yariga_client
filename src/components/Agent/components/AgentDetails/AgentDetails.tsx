import { useAppSelector } from "store/hooks";

import { selectAgentDetails } from "store/selectors/agent.selectors";

import * as UI from "./components";
import { Box, Typography, Divider, Stack } from "@mui/material";

interface AgentDetailsT {
  loading: boolean;
}

const AgentDetails: React.FC<AgentDetailsT> = ({ loading }) => {
  const details = useAppSelector(selectAgentDetails);

  return loading ? (
    <UI.AgentDetailsSkeleton />
  ) : (
    <Box
      boxShadow={{ xs: 0, app_mobile: 3 }}
      sx={{
        backgroundColor: "app_bg.main",
        borderRadius: "10px",
        padding: "20px",
        height: "100%",
      }}
    >
      <Typography fontSize={18} fontWeight={600} pb="15px">
        Agent Details
      </Typography>

      <Divider />

      <Typography color="app_text.main" mt="20px">
        {details.bio}
      </Typography>

      <Stack gap="10px" mt="30px" pb="25px">
        <UI.AgentDetailsListedItem
          label="Agency"
          value={details.agency.title}
        />

        <UI.AgentDetailsListedItem
          label="Agent License"
          value={details.agency.agencyLicense}
        />

        <UI.AgentDetailsListedItem
          label="Tax Number"
          value={details.taxNumber}
        />

        <UI.AgentDetailsListedItem
          label="Service Area"
          value={details.serviceArea}
        />
      </Stack>

      <Divider />

      <Typography fontSize={18} fontWeight={600} py="15px">
        Agent Status
      </Typography>

      <UI.AgentDetailsPieCharts />
    </Box>
  );
};

export default AgentDetails;
