import { RouterHistory } from "config/config";
import { Dashboard } from "components/Dashboard";
import { PATHS } from "config/paths";
import Helmet from "../Helmet";

RouterHistory.redirectUnAuthorized();

const DashboardPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Dashboard"
        description="See statistic of our Website how it helps people"
        path={PATHS.dashboard_page}
      />
      <Dashboard />
    </>
  );
};

export default DashboardPage;
