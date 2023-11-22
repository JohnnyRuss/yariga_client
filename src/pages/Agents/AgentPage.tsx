/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { RouterHistory } from "config/config";
import { useAgentsQuery } from "hooks/api/agents";
import { usePropertiesQuery } from "hooks/api/properties";

import { Agent } from "components/Agent";

RouterHistory.redirectUnAuthorized();

const AgentPage: React.FC = () => {
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
  }, []);

  return <Agent />;
};

export default AgentPage;
