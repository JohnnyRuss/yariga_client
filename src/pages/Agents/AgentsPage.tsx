/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";
import { useAgentsQuery } from "hooks/api/agents";
import { useRedirectUnAuthorized } from "hooks/auth";

import Helmet from "pages/Helmet";
import { Agents } from "components/Agent";
import AppLayout from "components/AppLayout/AppLayout";

const AgentsPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

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

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        type="website"
        title="Agents"
        path={PATHS.agent_page}
        description="yariga agents listing presentation with agents contact information."
      />

      <AppLayout>
        <Agents />
      </AppLayout>
    </>
  );
};

export default AgentsPage;
