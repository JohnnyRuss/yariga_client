/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { useParams } from "react-router-dom";

import { RouterHistory } from "config/config";
import { agentActions } from "store/reducers/agent.reducer";
import { propertiesActions } from "store/reducers/properties.reducer";

import AgentProperties from "components/Agent/AgentProperties";

RouterHistory.redirectUnAuthorized();

const AgentPropertiesPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { agentId } = useParams();

  useEffect(() => {
    if (!agentId) return;

    dispatch(agentActions.getAgent({ agentId }));
    dispatch(propertiesActions.getAgentProperties({ agentId, limit: 15 }));

    return () => {
      dispatch(agentActions.cleanUpAgent());
      dispatch(propertiesActions.cleanUpAgentProperties());
    };
  }, [agentId]);

  return <AgentProperties />;
};

export default AgentPropertiesPage;
