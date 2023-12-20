/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import { textCapitalize } from "utils";
import { DYNAMIC_PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";
import { useAgentsQuery } from "hooks/api/agents";
import { usePropertiesQuery } from "hooks/api/properties";
import { selectAgentHelmet } from "store/selectors/agent.selectors";

import Helmet from "pages/Helmet";
import { Spinner } from "components/Layouts";
import AppLayout from "components/AppLayout/AppLayout";

const Agent = lazy(() => import("components/Agent/Agent"));

const AgentPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

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

  return loading ? (
    <></>
  ) : (
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

      <AppLayout>
        <Suspense fallback={<Spinner />}>
          <Agent />
        </Suspense>
      </AppLayout>
    </>
  );
};

export default AgentPage;
