/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { useLocation, useNavigate } from "react-router-dom";

import { RouterHistory } from "config/config";
import { agentActions } from "store/reducers/agent.reducer";

import { Agents } from "components/Agent";

RouterHistory.redirectUnAuthorized();

const AgentsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { search, pathname } = useLocation();

  const urlSearchParams = new URLSearchParams(search);

  useEffect(() => {
    const existingPage = urlSearchParams.get("page");

    if (!existingPage) {
      urlSearchParams.set("page", "1");
      return navigate(`${pathname}?${urlSearchParams.toString()}`);
    }

    dispatch(agentActions.getAllAgents({ query: search }));

    return () => {
      dispatch(agentActions.cleanUpAgents());
    };
  }, [search]);

  return <Agents />;
};

export default AgentsPage;
