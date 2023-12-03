import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";

import ForgotPassword from "components/Auth/ForgotPassword";

RouterHistory.redirectAuthorized();

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Forgot Password"
        description="Update Yariga password"
        path={PATHS.auth_page_forgot_password}
        disAllowCrawler={true}
      />

      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
