import { RouterHistory } from "config/config";
import { Dashboard } from "components/Dashboard";

RouterHistory.redirectUnAuthorized();

const DashboardPage: React.FC = () => {
  return <Dashboard />;
};

export default DashboardPage;
