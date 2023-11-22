/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { RouterHistory } from "config/config";
import { useAgentsQuery } from "hooks/api/agents";

import { Agents } from "components/Agent";

RouterHistory.redirectUnAuthorized();

const AgentsPage: React.FC = () => {
  const navigate = useNavigate();

  const { getAllAgents, cleanUpAgents } = useAgentsQuery();

  const { search, pathname } = useLocation();
  const urlSearchParams = new URLSearchParams(search);

  useEffect(() => {
    const existingPage = urlSearchParams.get("page");

    if (!existingPage) {
      urlSearchParams.set("page", "1");
      return navigate(`${pathname}?${urlSearchParams.toString()}`);
    }

    getAllAgents({ query: search });

    return () => {
      cleanUpAgents();
    };
  }, [search]);

  return <Agents />;
};

export default AgentsPage;
