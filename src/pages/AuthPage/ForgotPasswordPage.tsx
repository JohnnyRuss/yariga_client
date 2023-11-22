import ForgotPassword from "components/Auth/ForgotPassword";
import { RouterHistory } from "config/config";

RouterHistory.redirectAuthorized();

const ForgotPasswordPage: React.FC = () => {
  return <ForgotPassword />;
};

export default ForgotPasswordPage;
