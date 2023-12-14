import { PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";

import Helmet from "../Helmet";
import { Dashboard } from "components/Dashboard";
import AppLayout from "components/AppLayout/AppLayout";

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
        <Dashboard />
      </AppLayout>
    </>
  );
};

export default DashboardPage;
