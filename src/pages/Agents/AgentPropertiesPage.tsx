/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { RouterHistory } from "config/config";
import { useAgentsQuery } from "hooks/api/agents";
import { usePropertiesQuery } from "hooks/api/properties";

import AgentProperties from "components/Agent/AgentProperties";

RouterHistory.redirectUnAuthorized();

const AgentPropertiesPage: React.FC = () => {
  const { agentId } = useParams();

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
  }, [agentId]);

  return <AgentProperties />;
};

export default AgentPropertiesPage;
