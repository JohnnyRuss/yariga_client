import { useAppSelector } from "store/hooks";

import {
  selectAgentProperties,
  selectAgentPropertiesStatus,
} from "store/selectors/properties.selectors";
import { selectAgentCredentials } from "store/selectors/agent.selectors";

import { Box } from "@mui/material";
import { ContentBox, GoBackButton, PropertiesList } from "components/Layouts";

const AgentProperties: React.FC = () => {
  const status = useAppSelector(selectAgentPropertiesStatus);

  const properties = useAppSelector(selectAgentProperties);
  const agent = useAppSelector(selectAgentCredentials);

  const agentFirstName = agent.username.split(" ")[0];

  return (
    <ContentBox>
      <Box height={{ xs: "92vh", md: "87vh" }}>
        <Box
          bgcolor={{ xs: "app_bg.main", app_mobile: "transparent" }}
          pt={{ xs: 1, md: 0 }}
        >
          <GoBackButton>{`${agentFirstName}'s Properties`}</GoBackButton>
        </Box>

        <Box className="content__box" height="92%" pt={{ xs: 0, md: "auto" }}>
          <PropertiesList
            list={properties}
            status={status}
            skeletonCount={12}
            containerSx={{ marginTop: ["-10px", "0px"] }}
          />
        </Box>
      </Box>
    </ContentBox>
  );
};

export default AgentProperties;
