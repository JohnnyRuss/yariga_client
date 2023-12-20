/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";
import { useAgentsQuery } from "hooks/api/agents";
import { useRedirectUnAuthorized } from "hooks/auth";

import Helmet from "pages/Helmet";
import { Spinner } from "components/Layouts";
import AppLayout from "components/AppLayout/AppLayout";

const Agents = lazy(() => import("components/Agent/Agents"));

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
        <Suspense fallback={<Spinner />}>
          <Agents />
        </Suspense>
      </AppLayout>
    </>
  );
};

export default AgentsPage;
