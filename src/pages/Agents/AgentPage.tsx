/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "store/hooks";
import { RouterHistory } from "config/config";
import { agentActions } from "store/reducers/agent.reducer";

import { Agent } from "components/Agent";

RouterHistory.redirectUnAuthorized();

const AgentPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { agentId } = useParams();

  useEffect(() => {
    if (!agentId) return;

    dispatch(agentActions.getAgent({ agentId }));

    return () => {
      dispatch(agentActions.cleanUpAgent());
    };
  }, []);

  return <Agent />;
};

export default AgentPage;
