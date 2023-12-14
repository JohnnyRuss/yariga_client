/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { useParams } from "react-router-dom";

import { textCapitalize } from "utils";
import { DYNAMIC_PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";
import { useAgentsQuery } from "hooks/api/agents";
import { usePropertiesQuery } from "hooks/api/properties";
import { selectAgentHelmet } from "store/selectors/agent.selectors";

import Helmet from "pages/Helmet";
import AppLayout from "components/AppLayout/AppLayout";
import AgentProperties from "components/Agent/AgentProperties";

const AgentPropertiesPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

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

  return loading ? (
    <></>
  ) : (
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

      <AppLayout>
        <AgentProperties />
      </AppLayout>
    </>
  );
};

export default AgentPropertiesPage;
