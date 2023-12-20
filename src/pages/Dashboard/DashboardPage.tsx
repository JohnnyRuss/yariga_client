import { lazy, Suspense } from "react";
import Helmet from "../Helmet";

import { PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";

import { Spinner } from "components/Layouts";
import AppLayout from "components/AppLayout/AppLayout";
const Dashboard = lazy(() => import("components/Dashboard/Dashboard"));

const DashboardPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        title="Dashboard"
        description="See statistic of our Website how it helps people"
        path={PATHS.dashboard_page}
      />

      <AppLayout>
        <Suspense fallback={<Spinner />}>
          <Dashboard />
        </Suspense>
      </AppLayout>
    </>
  );
};

export default DashboardPage;
