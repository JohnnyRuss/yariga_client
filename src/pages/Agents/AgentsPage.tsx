/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { agentActions } from "store/reducers/agent.reducer";

import { Agents } from "components/Agent";

import { RouterHistory } from "config/config";

RouterHistory.redirectUnAuthorized();

const AgentsPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(agentActions.getAllAgents());

    return () => {
      dispatch(agentActions.cleanUpAgents());
    };
  }, []);

  return <Agents />;
};

export default AgentsPage;
