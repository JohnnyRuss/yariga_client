import React from "react";
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
      <GoBackButton>{`${agentFirstName}'s Properties`}</GoBackButton>

      <Box className="content__box" height="92%">
        <PropertiesList list={properties} status={status} skeletonCount={12} />
      </Box>
    </ContentBox>
  );
};

export default AgentProperties;
