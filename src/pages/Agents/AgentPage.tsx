/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Helmet from "pages/Helmet";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import { textCapitalize } from "utils";
import { DYNAMIC_PATHS } from "config/paths";
import { RouterHistory } from "config/config";
import { useAgentsQuery } from "hooks/api/agents";
import { usePropertiesQuery } from "hooks/api/properties";
import { selectAgentHelmet } from "store/selectors/agent.selectors";

import { Agent } from "components/Agent";

RouterHistory.redirectUnAuthorized();

const AgentPage: React.FC = () => {
  const { agentId } = useParams();

  const { status, username, bio, image } = useAppSelector(selectAgentHelmet);

  const { getAgent, cleanUpAgent } = useAgentsQuery();
  const { getAgentProperties, cleanUpAgentProperties } = usePropertiesQuery();

  useEffect(() => {
    if (!agentId) return;

    getAgent({ agentId });
    getAgentProperties({ agentId });

    return () => {
      cleanUpAgent();
      cleanUpAgentProperties();
    };
  }, []);

  return (
    <>
      {status.status === "SUCCESS" && (
        <Helmet
          image={image}
          type="profile"
          description={bio}
          title={textCapitalize(username || "")}
          path={DYNAMIC_PATHS.agent_page(agentId!)}
        />
      )}
      <Agent />
    </>
  );
};

export default AgentPage;
