/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Helmet from "pages/Helmet";
import { useAppSelector } from "store/hooks";
import { useParams } from "react-router-dom";

import { textCapitalize } from "utils";
import { DYNAMIC_PATHS } from "config/paths";
import { RouterHistory } from "config/config";
import { useAgentsQuery } from "hooks/api/agents";
import { usePropertiesQuery } from "hooks/api/properties";
import { selectAgentHelmet } from "store/selectors/agent.selectors";

import AgentProperties from "components/Agent/AgentProperties";

RouterHistory.redirectUnAuthorized();

const AgentPropertiesPage: React.FC = () => {
  const { agentId } = useParams();

  const { getAgent, cleanUpAgent } = useAgentsQuery();
  const { getAgentProperties, cleanUpAgentProperties } = usePropertiesQuery();

  const { status, username, bio, image } = useAppSelector(selectAgentHelmet);

  useEffect(() => {
    if (!agentId) return;

    getAgent({ agentId });
    getAgentProperties({ agentId });

    return () => {
      cleanUpAgent();
      cleanUpAgentProperties();
    };
  }, [agentId]);

  return (
    <>
      {status.status === "SUCCESS" && (
        <Helmet
          description={bio}
          type="website"
          image={image}
          title={`${textCapitalize(username || "")} | Properties`}
          path={DYNAMIC_PATHS.agent_properties_page(agentId!)}
        />
      )}
      <AgentProperties />
    </>
  );
};

export default AgentPropertiesPage;
